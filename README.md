# Relógio Led

## Como utilizar
  Gerei um executável utilizando o nexe. Caso queira executar por linha de comando ao invés de utilizar o .exe, é necessário possuir o node.js instalado no computador.
  Descompacte o zip e, dentro do prompt, vá até a pasta. Dentro da pasta, digite, ainda no terminal, "node index.js".
  Deixei tudo dentro do mesmo arquivo pois considerei que a linearidade permitia melhor vizualização do código como um todo.
  Dentro do programa, estou utilizando a API indicada por vocês. Dessa forma, informe o continente e o país, em inglês. Caso o formato entre incorretamente ou a API não responda, uso o horário do seu computador.
  Depois disso, informe o tamanho do relógio, sendo aceito qualquer número maior ou igual a 1. Lembre-se que, para números grandes, caso o tamanho da janela do prompt seja inferior ao output, o output sairá desconfigurado. Ademais, caso o número colocado seja float, eu utilizo apenas a parte inteira dele. Para fechar, bastar apertar Ctrl+c.


## Documentação
  Utilizei os módulos readline-sync e o fetch. O primeiro para ler o input do usuário e o segundo para a implementação da WorldTimeAPI.org.
  Para fazê-lo, criei uma matriz onde cada linha representa um numero (de 0 a 9), e cada coluna representa uma parte do numero, como pode ser visto abaixo. 

    a   | line0
  b   c | line1
    d   | line1
  e   f | line2
    g   | line2

  Dessa forma, o numero 0, por exemplo, é formado por a='_', b='|', c='|', d=' ', e='|', f='|', g='_'.

  Para o caso base, com tamanho = 1, formei 3 arrays: line0, line1 e line2, devido à forma de printar no prompt. A line0 é responsável pela primeira parte, onde há apenas ' ' ou '_' (por isso o tamanho desse array é 6). A line1 é responsavel pela segunda parte, onde há ' ', '_' ou '|'. A line2 é responsavel pela terceira parte, onde, assim como a line1, possui ' ', '_' ou '|'.

  Como printei por linhas, cada um dos 6 espaços na line0 é responsável por cada um dos 6 números do relógio [hh:mm:ss], cada um dos 18 espaços na line1 e na line2 é responsável pela parte 2 do número, sendo separado, cada número, em 3 espaços. Dessa forma, para a line1 e line2, se temos line1[0]=' ', line1[1]='_' e line1[2]='|', temos ' _|', sendo os próximos 3 espaços de outro número e assim por diante.

  Agora, separado os números por partes, bastou criar a lógica de como printar de modo a possibilitar a criação em vários tamanhos. Para isso, separei em 5 partes: topLine, topMiddleLine, middleLine, bottomMiddleLine e bottomLine. O topLine usa apenas a line0, sendo responsável pela parte 'a' do numero. O topMiddleLine usa a line1 e é responsável pelo tamanho onde cada linha possui apenas ' ' ou '|', sendo responsável pela parte 'b' e 'c' do numero. O middleLine utiliza a line1 e é responsável pela parte 'd' do número, tendo que utilizar ' ', '|' e '_', de modo a formar a parte central. O bottomMiddleLine possui a mesma lógica do topMiddleLine, mas utiliza a line2, sendo responsável pelas partes 'e' e 'f' e a bottomLine possui a mesma da middleLine, mas utiliza a line2, sendo responsável pela parte 'g'.

  Para a topLine, basta vizualizar na matriz se existe ou não um '_' e colocar de acordo com o tamanho na primeira linha, mantendo a distancia entre os números.
  Para a topMiddleLine, pego a line1[0] e line1[2], onde está os '|'. A partir disso, crio novas linhas alinhando-os e mantendo o espaçamento necessário.
  Para a middleLine, pego a line1[0],[1] e [2], onde estão os '|' e os '_'. Desse modo, crio a linha do 'meio', adaptando os espaços para cada tamanho. Ademais, adapto para colocar a '•' para separar H/M/S.
  Para a bottomMiddleLine, faço a mesma coisa da topMiddleLine utilizando a line2, adaptando para colocar a '•' para separar H/M/S e, para a bottomLine, faço a mesma coisa da middleLine mas utilizando a line2.