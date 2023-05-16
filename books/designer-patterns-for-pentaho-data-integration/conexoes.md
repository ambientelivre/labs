# Padrões para Conexões

Trataremos neste tópico todas as particularidades sobre o uso de conexões dentro do Pentaho Data Integration.

### Dados de conexão como variáveis

Em ambientes mais complexos sempre teremos de testar nosso processo de ETL em ambientes que não são produção, e com isso configuramos o apontamento da conexão de banco de dados  de maneira fixada na conexão se torna algo inviável para estarmos testando o ETL em múltiplos locais \( databases \) , com isso o uso de variáveis e com apoio do arquivo **~/.kettle/kettle.properties** onde podemos criar variáveis globais para o PDI, pode nos facilitar esta dinâmica de troca de base de dados.

#### Como NÃO deve ser feito:

![](.gitbook/assets/not_sample_conection_data_integration.png)

O uso fixo de variáveis não é aconselhável 

#### Como DEVE ser feito:

Abaixo um exemplo de um trecho do arquivo **~/.kettle/kettle.properties** com 5 variáveis usadas na conexão do Kettle/PDI.

```text
MYPROJECT_DATABASE_HOSTNAME=8.8.8.8
MYPROJECT_DATABASE_PORT=3306
MYPROJECT_DATABASE_USER=usuario_do_database
MYPROJECT_DATABASE_PASSWORD=sua_senha
MYPROJECT_DATABASE_NAME=nome_do_seu_database
```

A seguir exemplo de uso das variáveis em uma conexão com o banco de dados MySQL usando variáveis definidas no arquivo **~/.kettle/kettle.properties** do usuário.

![](.gitbook/assets/database_connections_designer_patterns.png)

  

Referências sobre como usar parâmetros e variáveis no PDI: [https://wiki.pentaho.com/display/COM/Using+Variables+in+Kettle](https://wiki.pentaho.com/display/COM/Using+Variables+in+Kettle)

### Uso de schemas nos comandos SQL

Nos componentes com manipulação de tabelas de banco de dados \( table input, Execute SQL script, Execute row SQL script , etc \) não e recomendável o uso o nome dos schemas inclusos nos comandos SQL. Esta informação já esta inclusa quando criamos a conexão com o banco de dados e a redundência deste dado nos step aumenta o risco de quebrar o fluxo de etl no caso de alteração de base de dados, principalmente em ambientes onde temos diversas conexões como produção , homologação e desenvolvimento.

#### Como NÃO deve ser feito:

```sql
SELECT id, name FROM MYDATABASE.MYTABLE
```

#### Como DEVE ser feito:

```sql
SELECT id, name FROM MYTABLE
```

com isso no caso de migração de banco de dados, você só alterará um local \( conexão \) e todas as suas alterações ou trabalhos continuarão funcionando.

