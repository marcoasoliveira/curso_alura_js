var titulo = document.querySelector('h1')
titulo.textContent = "Aparecida Nutricionista" //muda o conteudo dentro da tag

//arrays e Loops e Estilos

var pacientes = document.querySelectorAll('.paciente')
//console.log(pacientes)

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
        //console.log("Peso Inválido")
        pesoValido = false
        tdImc.textContent = 'Peso Inválido'
        paciente.classList.add('paciente-invalido') //classList retorna as classes do elemento
    }                                               //.add adiciona uma classe nova

    if (altura <= 0 || altura >= 3){
        //console.log("Altura Inválida")
        alturaValida = false
        tdImc.textContent = 'Altura Inválida'
        paciente.classList.add('paciente-invalido')
    }

    if (pesoValido && alturaValida) {
        var imc = peso / Math.pow(altura, 2) //altura² == (altura*altura)
        tdImc.textContent = imc.toFixed(2) // define o numero de casas decimais
    }
}