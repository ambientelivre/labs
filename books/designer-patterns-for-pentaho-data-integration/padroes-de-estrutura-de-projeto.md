# Padrões de Estrutura de Projeto

Nesta imagem temos uma visão de como organizar um diretório no filesystem exemplificando um projeto com PDI \( neste caso o exemplo é o Project1 \).

Esta estrutura e facilmente armazenada em repositórios com git e svn para deploy de projetos com PDI.



![](.gitbook/assets/folder_structure.png)

### Estrutura 



project1   
-content   
--public   
---project1   
--home   
---admin   
---user1   
-config   
--project1.properties   
-input -output   
-env   
--ws\_files\_v7   
---.kettle   
----kettle.properties   
----repositories.xml   
----shared.xml   
---spoon.bat/sh   
--ws\_files\_v6   
---.kettle   
----kettle.properties   
----repositories.xml   
----shared.xml   
---spoon.bat/sh

Faá o download do manual de boas práticas para estrutura  

{% file src=".gitbook/assets/pdi-development-techniques.pdf" caption="PDI Development Techniques.pdf" %}



