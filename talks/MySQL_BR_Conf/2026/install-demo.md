# VM com MariaDB e Kafka 4.3.1

sudo apt install -y docker.io
sudo systemctl enable --now docker

sudo systemctl stop mariadb
sudo systemctl disable mariadb

sudo apt purge -y mariadb-server mariadb-client mariadb-common mariadb-server-core-* mariadb-client-core-*
sudo apt autoremove -y
sudo apt autoclean

sudo rm -rf /var/lib/mysql
sudo rm -rf /etc/mysql
sudo rm -rf /var/log/mysql

mkdir -p ~/mysql-cdc-demo/conf.d
cat > ~/mysql-cdc-demo/conf.d/cdc.cnf <<'EOF'
[mysqld]
server-id=223344
log_bin=mysql-bin
binlog_format=ROW
binlog_row_image=FULL
binlog_expire_logs_seconds=604800
EOF

sudo docker run -d --name mysql-demo \
  -e MYSQL_ROOT_PASSWORD=root_password \
  -e MYSQL_DATABASE=vendas \
  -p 3306:3306 \
  -v ~/mysql-cdc-demo/conf.d:/etc/mysql/conf.d \
  mysql:8.0
  
sudo docker exec -it mysql-demo mysql -uroot -proot_password




CREATE USER 'debezium'@'%' IDENTIFIED BY 'dbz_password';

GRANT SELECT, RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'debezium'@'%';
FLUSH PRIVILEGES;

CREATE DATABASE vendas;
USE vendas;

CREATE TABLE pedidos (id INT PRIMARY KEY, status VARCHAR(20), valor DECIMAL(10,2));
INSERT INTO pedidos VALUES (4231, 'pendente', 199.90);


cd /opt/kafka/default
mkdir -p plugins/debezium-connector-mysql

wget https://repo1.maven.org/maven2/io/debezium/debezium-connector-mysql/3.6.3.Final/debezium-connector-mysql-3.6.3.Final-plugin.tar.gz

tar -xzf debezium-connector-mysql-3.6.3.Final-plugin.tar.gz


nano config/connect-distributed.properties

bin/kafka-server-start.sh config/server.properties
bin/connect-distributed.sh config/connect-distributed.properties

nano connector-mysql-cdc.json
{
  "name": "demo-mysql-connector",
  "config": {
    "connector.class": "io.debezium.connector.mysql.MySqlConnector",
    "database.hostname": "localhost",
    "database.port": "3306",
    "database.user": "debezium",
    "database.password": "dbz_password",
    "database.server.id": "223344",
    "topic.prefix": "demo",
    "database.include.list": "vendas",
    "table.include.list": "vendas.pedidos",
    "schema.history.internal.kafka.bootstrap.servers": "localhost:9092",
    "schema.history.internal.kafka.topic": "schema-changes.vendas",
    "include.schema.changes": "true",
    "snapshot.mode": "initial",
    "binary.handling.mode": "base64",
    "tombstones.on.delete": "false"
  }
}

curl -X POST -H "Content-Type: application/json" \
  --data @connector-mysql-cdc.json \
  http://localhost:8083/connectors
  
  
kafka-console-consumer.sh --bootstrap-server localhost:9092   --topic demo.vendas.pedidos --from-beginning --property print.key=true  






























