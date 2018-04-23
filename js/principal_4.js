var titulo = document.querySelector('h1')
titulo.textContent = "Aparecida Nutricionista" //muda o conteudo dentro da tag

//Escutando Eventos

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

var botaoAdicionar = document.querySelector('#adicionar-paciente')

// botaoAdicionar.addEventListener("click", (event) => {
botaoAdicionar.onclick = (event) => { // faz o mesmo que o addEventListener (event shortcut)
    event.preventDefault() //previne o comportamento padrão do botão, no caso, evita o refresh do botão
    //console.log('fui clicado!')
    var form = document.querySelector("#form-adiciona")
    var nome = form.nome.value,
        peso = form.peso.value,
        altura = form.altura.value,
        gordura = form.gordura.value
    
    var pacienteTr = document.createElement("tr")
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

    console.log(pacienteTr)
}
