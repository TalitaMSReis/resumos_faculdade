##  Funções | funcoes.js

### Nesta aula aprendi sobre funções e como linkar um arquivo Java Script, que contem todas as funções. |Parte 2|

Foi feito um código com o body instrução do que seria feito e foi linkado um arquivo JS para abrigar as funcões que seriam utilizadas posteriormente.

Importante se atentar que você poderá utilizar um arquivo js com todas as funções já prontas e linkar em vários arquivos, deixando assim mais enxuta as suas linhas de código.

Podemos observar pelo código a seguir.

```
// funções de declaração
function calcular(operacao){
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value


    let resultado
    switch (operacao){
        case '+': resultado = somar(n1, n2); break;
        case '-': resultado = subtrair(n1, n2); break;
        case '*': resultado = multiplicar(n1, n2); break;
        case '/': resultado = dividir(n1, n2); break;
    }

    document.getElementById('resultado').innerHTML = 'Oresultado é ' + resultado
    

}

function somar(n1, n2){
    return Number(n1) + Number(n2)

}
function subtrair(n1, n2){
    return Number(n1) - Number(n2)

}
function multiplicar(n1, n2){
    return Number(n1) * Number(n2)
    
}
function dividir(n1, n2){
    if(n2 == 0){
        console.error('Não é possível dividir número por zero')
        return null
    } else {
        return Number(n1) / Number(n2)
    }
    
    
}

//função de expressão
const somaExpressao =  function (n1, n2){
    return n1 + n2
}


//funçaõ de seta
const somaArrow = (n1, n2) => n1 + n2

console.log(somaArrow(58, 26))

``` 

Fiz algumas observações e explicações dentro do código, você pode observar logo em seguida de `//` ou entre `/*` e `*/`.

Agradeço a atenção, e até o resumo da próxima aula! 
