var valor_hora = document.querySelector("#valor-hora")

var horas_projeto = document.querySelector("#horas-projeto")

var total = document.querySelector("#resposta")

function calcular () {
   var valor_total = (valor_hora.valueAsNumber * horas_projeto.valueAsNumber).toFixed(2)
   total.textContent = "R$" + valor_total;
   console.log(valor_total)

}
