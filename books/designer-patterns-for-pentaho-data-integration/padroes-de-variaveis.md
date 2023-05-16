# Padrões de Variáveis

Trataremos neste tópico todas as particularidades sobre a criação e uso de variáveis no Pentaho Data Integration.

### Variáveis para path de transformações ou jobs

Quanto configuramos Steps que chamam a execução de outros Jobs ou Transformations devemos sempre apontar nos atalhos ou links de chamada o caminho relativo com o uso de variáveis ao invez de adicionar o caminho absoluto. Isso para podermos usufruir da facilidade de copiar para outra infraestrutura e o mesmo executar sem necessidade de alterações de paths absolutos. Os principais steps que tem estas configurações são o **Transformation** e ou **Job** quando criamos job e nas transformações os steps **Transformation Executor** e **Job Executor**.

#### Como NÃO deve ser feito:

![](.gitbook/assets/not_path_variable_kettle.png)

o uso de path absolutos vai gerar problemas quando fazer o deploy das transformações em outros ambiente.

#### Como DEVE ser feito:

![](.gitbook/assets/path_relative_kettle_designer.png)

A variável **${Internal.Entry.Current.Directory}** representa o path de onde o Job ou transformação que esta usando ela esta salva e com isso podemos fazer um path relativo deste ponto de partida o que permitira distribuirmos um grupo de KTRs e KJBs formando um conceito de aplicação.

### Variáveis para path de outputs e inputs de arquivos no filesystem

O mesmo caso se aplica para leitura e gravação no sistema de arquivos , sempre devemos usar path relatívo e uso de variáveis personalizadas ou de ambiente.

#### Como Não deve ser feito:

![](.gitbook/assets/file-input-operation-system-path.png)

Este exemplo é um com o Step Excel Input.

#### Como DEVE ser feito:

![](.gitbook/assets/file-input-operation-system-path-variable-768x280.png)

