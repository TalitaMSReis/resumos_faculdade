
##  Exercícios Práticos | jogoDaVelha.js

### Nesta aula fiz um exercício prático com os conhecimentos adquiridos nas últimas aulas. |Parte 2|

Essa é a parte do jogo da velha no JS, que está usando funções, `for` e `if else` linkados pelo arquivo no HTML.

Podemos observar o código JS a seguir.

```
let tabuleiro
let board
let aviso
let jogador
let linha
let coluna


function iniciar(){
    tabuleiro =[]
    //Não necessariamente o nome do elemento tem que ser o mesmo nome da variável
    board = document.getElementById('board')
    aviso = document.getElementById('aviso')
    jogador = 1

    for(let i = 0; i < 3; i++){
        tabuleiro[i] = []
        for(let j =0; j < 3; j++){
            tabuleiro [i][j] = 0
        }

    }

    console.table(tabuleiro)
    exibir()


}
function exibir(){
    let tabela = '<table cellpadding= "10" border="1">'

    for(let i = 0; i < 3; i++){
        //+= pega o valor existente e soma/concatena com mais um valor
    tabela +=  '<tr>'
        for(let j = 0; j < 3; j++){
            
            switch(tabuleiro[i][j]){
                case -1: marcador = 'X'; break;
                case 1: marcador = 'O'; break;
                default: marcador = '_'
            }
            tabela += '<td>' + marcador + '</td>'
        } 
     /*
        tabela +=  '<td>1</td>'
        tabela +=  '<td>2</td>'
        tabela +=  '<td>3</td>'
        */
    tabela +=  '</tr>'
    
    }

    tabela +=  '</table>'
   
    board.innerHTML = tabela

}
function jogar(){
    
    aviso.innerHTML = 'Vez do jogador: ' + numeroJogador()

    linha = document.getElementById('linha').value -1
    coluna = document.getElementById('coluna').value -1

    if(tabuleiro[linha][coluna] == 0){
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1
    } else {
        aviso.innerHTML = 'Esse campo já foi marcado :('
    }

    
    console.table(tabuleiro);

    jogador++

    exibir()
    checar()



}
function checar(){
    //Verificar as linhas
    for(let i = 0 ; i < 3; i ++){
        let soma = 0
        soma = tabuleiro [i] [0] + tabuleiro [i] [1] + tabuleiro [i] [2]

        if( soma == 3 || soma ==-3 ){
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
        }
    }
    //Verificar as colunas
    for(let i = 0 ; i < 3; i ++){
        let soma = 0
        soma = tabuleiro [0] [i] + tabuleiro [1] [i] + tabuleiro [2] [i]

        if( soma == 3 || soma ==-3 ){
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
        }
    }
    //Verificar as diagonal
        let soma = 0
        soma = tabuleiro [0] [0] + tabuleiro [1] [1] + tabuleiro [2] [2]

        if( soma == 3 || soma ==-3 ){
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
        }
        for(let i = 0 ; i < 3; i ++){
            let soma = 0
            soma = tabuleiro [i] [i] + tabuleiro [i] [i] + tabuleiro [i] [i]
    
            if( soma == 3 || soma ==-3 ){
                aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
            }
        }

}
function numeroJogador(){
    // n%2 significa que o resto de uma divisão, então o resto de uma divisão de um número par sempre será 0 e de um número impar será 1 , essa é a estratégia que utilizaremos
    return jogador%2 + 1
}

``` 

Fiz algumas observações e explicações dentro do código, você pode observar logo em seguida de `//` ou entre `/*` e `*/`.

Agradeço a atenção, e até o resumo da próxima aula! 
