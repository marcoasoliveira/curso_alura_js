var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.onclick = (event) => { // faz o mesmo que o addEventListener (event shortcut)
    event.preventDefault() //previne o comportamento padrão do botão, no caso, evita o refresh do botão
    var form = document.querySelector("#form-adiciona")
    
    //extraindo informações do paciente do form
    // var nome = form.nome.value,
    //     peso = form.peso.value,
    //     altura = form.altura.value,
    //     gordura = form.gordura.value
    
    var paciente = obtemInformacaoDoFormulario(form)
    console.log(paciente)

    //cria a tr e a td do paciente
    // var pacienteTr = document.createElement("tr")
    // var nomeTd = document.createElement("td")
    // var pesoTd = document.createElement("td")
    // var alturaTd = document.createElement("td")
    // var gorduraTd = document.createElement("td")
    // var imcTd = document.createElement("td")

    // nomeTd.textContent = paciente.nome
    // pesoTd.textContent = paciente.peso
    // alturaTd.textContent = paciente.altura
    // gorduraTd.textContent = paciente.gordura
    // imcTd.textContent = paciente.imc

    // pacienteTr.appendChild(nomeTd)
    // pacienteTr.appendChild(pesoTd)
    // pacienteTr.appendChild(alturaTd)
    // pacienteTr.appendChild(gorduraTd)
    // pacienteTr.appendChild(imcTd)
    var pacienteTr = montaTr(paciente)

    // adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

    form.reset() //função que limpa do form.
}

function obtemInformacaoDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value) //função criada no arquivo calcula-imc.js
    }
    
    return paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    // var nomeTd = document.createElement("td")
    // nomeTd.classList.add("info-nome") ---- a função montaTd substituiu a criação manual
    // nomeTd.textContent = paciente.nome (... passo incluso dentro do montaTd)

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function montaTd(dado,classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}