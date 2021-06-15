import BotaoConclui from "./botaoConclui.js"
import BotaoDeletar from "./botaoDelete.js"
import {carregaTarefa} from "./carregaTarefa.js"


export const coletaInputs = (evento) => {
    evento.preventDefault()
    
    const input = document.querySelector('[data-form-input]')
    const novaTarefa = input.value
    const calendario = document.querySelector('[data-form-date]')    
    const data = moment(calendario.value).format('DD/MM/YYYY')
    const concluida = false

    const dados = {
        novaTarefa,
        data,
        concluida
    }
    
    //Pega o que está armazenado no localStorage, transforma em um array ou cria um array vazio
    const tarefas =  JSON.parse(localStorage.getItem("tarefas")) || []
    
    //Une o que já está armazenado no localStorage e junta com os dados que o usuário acabou de inserir
    const bancoTarefas = [...tarefas, dados]
    
    //Guarda tudo no localStorage (atualização)
    localStorage.setItem("tarefas", JSON.stringify(bancoTarefas))
    
    carregaTarefa()
    input.value = " "
    calendario.value = " "
    
}

export const MontaTarefa = ({novaTarefa, data, concluida}, id) => {
    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${novaTarefa}</p>`
    
    if(concluida){
        tarefa.classList.add('done')
    }
    tarefa.classList.add('task')
        

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeletar(carregaTarefa, id))

    return tarefa
}

