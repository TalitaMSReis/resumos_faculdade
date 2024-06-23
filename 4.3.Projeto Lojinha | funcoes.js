
##  Projeto Lojinha | style.css

### Nesta aula faremos um projeto de uma lojinha de tecnologia.

Utilizaremos HTML, CSS e JavaScript.

O seguinte código é referente a parte do JavaScript.

```

function alterarQtd(produto, acao){
    const qtd = document.getElementById('qtd_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);
   
    if( acao == '-' && qtd.innerHTML == 0){
        
    }else {
    acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
    const valorTotal = qtd.innerHTML * somenteNumeros(valor.innerHTML) 
    total.innerHTML = formatarValor(valorTotal)
    soma()
    }
}
function soma(){
    let soma = 0

    for(let i = 1; i < 4; i++){
        let numero = somenteNumeros(document.getElementById('total_' + i).innerHTML)
        soma += Number(numero)
    }
   

    document.getElementById('subtotal').innerHTML = formatarValor(soma)
}
function somenteNumeros(n){
    return n.replace(/\D/g, '')
}
function formatarValor(n){
    return 'R$ ' + n.toLocaleString('pt-BR')

}

``` 

Agradeço a atenção, e até o resumo da próxima aula! 
