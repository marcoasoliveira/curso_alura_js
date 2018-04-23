 //Variáveis e operadores

 var paciente = document.querySelector("#primeiro-paciente")
 var tdPeso = paciente.querySelector(".info-peso")
 var peso = tdPeso.textContent

 var tdAtura = paciente.querySelector(".info-altura")
 var altura = tdAtura.textContent

 var pesoValido = true
 var alturaValida = true

 var tdImc = paciente.querySelector('.info-imc')

 if (peso <= 0 || peso >= 1000){
     console.log("Peso Inválido")
     pesoValido = false
     tdImc.textContent = 'Peso Inválido'
 }

 if (altura <= 0 || altura >= 3){
     console.log("Altura Inválida")
     alturaValida = false
     tdImc.textContent = 'Altura Inválida'
 }

 if (pesoValido && alturaValida) {
     var imc = peso / Math.pow(altura, 2) //altura² == (altura*altura)
     tdImc.textContent = imc   
 }

 console.log(paciente)  //tr
 console.log(tdPeso)  //td Peso
 console.log(peso) // peso do paciente
 console.log(altura) //altura do paciente
 console.log(imc) // imc do paciente