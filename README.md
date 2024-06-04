 # Estruturas de Condição | if else
### Nesta aula eu aprendi sobre estrutura de condições básicas, sendo if else.
Representarei o que aprendi a seguir.

(Como ainda não aprendi como colocar imagem aqui, vou ver se caso eu aprenda posteriormente, colocar a imagem do fluxograma.)

<!DOCTYPE html>
<html>
    <head>
        <title>Estruturas de Condição</title>

        <script>
            const n1 = Number(prompt('Digite a nota 1'))
            const n2 = Number(prompt('Digite a nota 2'))
            const n3 = Number(prompt('Digite a nota 3'))
            const n4 = Number(prompt('Digite a nota 4')) 

            const media = (n1+n2+n3+n4) / 4
            console.log ("A média final é " + media)
            
            if(media >= 7){
                console.log("Aprovado!")

            } else {
                console.log("Reprovado :(")

            }   



        </script>
    </head>
    <body>

    </body>

</html>

Este é o código inteiro e com ele é possível pegar o valor a soma das 4 notas (n1, n2, n3 e n4), calcular a média, e com o if, se a média for maior ou igual a 7 apresentar "Aprovado!", e com o else, se não apresentar "Reprovado :(".

