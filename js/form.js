var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.onclick = (event) => { // faz o mesmo que o addEventListener (event shortcut)
    event.preventDefault() //previne o comportamento padrão do botão, no caso, evita o refresh do botão
    var form = document.querySelector("#form-adiciona")
    var paciente = obtemInformacaoDoFormulario(form)
    var pacienteTr = montaTr(paciente)

    var erro = validaPaciente(paciente)

    if(erro.length > 0){
        exibeMensagensDeErro(erro)
        return
    }

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

    form.reset() //função que limpa do form.
    var ul = document.querySelector("#mensagem-erro")
    ul.innerHTML = ""
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

function validaPaciente(paciente){
    var erros = []
    if(paciente.nome.length == 0) erros.push("Nome não pode estar em branco")
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido")
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida")
    if(paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco")
    
    return erros
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro")
    ul.innerHTML = ""
    erros.forEach((erro)=> {
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    });
}