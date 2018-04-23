var titulo = document.querySelector('h1')
titulo.textContent = "Aparecida Nutricionista" //muda o conteudo dentro da tag

//Boas Práticas com Javascript

var pacientes = document.querySelectorAll('.paciente')

for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAtura = paciente.querySelector(".info-altura")
    var altura = tdAtura.textContent

    var pesoValido = true
    var alturaValida = true

    var tdImc = paciente.querySelector('.info-imc')

    if (peso <= 0 || peso >= 1000){
        pesoValido = false
        tdImc.textContent = 'Peso Inválido'
        paciente.classList.add('paciente-invalido') //classList retorna as classes do elemento
    }                                               //.add adiciona uma classe nova

    if (altura <= 0 || altura >= 3){
        alturaValida = false
        tdImc.textContent = 'Altura Inválida'
        paciente.classList.add('paciente-invalido')
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso,altura) //altura² == (altura*altura)
        tdImc.textContent = imc // define o numero de casas decimais
    }
}

function calculaImc (peso,altura){
    var imc = peso / Math.pow(altura, 2)
    return imc.toFixed(2) 
}