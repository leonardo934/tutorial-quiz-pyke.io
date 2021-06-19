var btenviar = document.getElementById('enviar')

btenviar.addEventListener('click', function () {

    var respostas = ['3', '1', '3', '2']
    var pontuacao = 0

    var pergunta1 = document.querySelector('input[name="pergunta1"]:checked')
   var pergunta2 = document.querySelector('input[name="pergunta2"]:checked')
    var pergunta3 = document.querySelector('input[name="pergunta3"]:checked')
    var pergunta4 = document.querySelector('input[name="pergunta4"]:checked')
   

   if(!pergunta1) {
    return alert('Você n coloco nada na pergunta 1')
   }else if (!pergunta2) {
    return alert('Você n coloco nada na pergunta 2')

   }else if(!pergunta3) {
    return alert('Você n coloco nada na pergunta 3') 

   }else if(!pergunta4) {
    return alert('Você n coloco nada na pergunta 4')
 
   }else {
    if (pergunta1.value == respostas[0]) {
        pontuacao = pontuacao + 3
    }
    if (pergunta2.value == respostas[1]) {
        pontuacao = pontuacao + 3
    }
    if (pergunta3.value == respostas[2]) {
        pontuacao = pontuacao + 2
    }
    if (pergunta4.value == respostas[3]) {
        pontuacao = pontuacao + 2
    }
    if(pontuacao >= 7) {
        alert(  "Parabéns você acertou: " + pontuacao +" de 10 Pontos!")
       
    }else{
        alert(  "parabéns por tentar, mas a sua pontuação foi menor que 8" )
       
    }
   }
});

