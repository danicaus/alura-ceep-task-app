//Botar a data em cima, organizando as tarefas por data

import {MontaTarefa} from "./criaTarefa.js"

export const criaData = (data) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []
    const dataMoment = moment(data, 'DD/MM/YYYY')
    const dataTopo = document.createElement('li')
    const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`

    dataTopo.innerHTML = conteudo

    tarefasCadastradas.forEach((tarefa, id) => {
        const dia = moment(tarefa.data, 'DD/MM/YYYY')

        const diff = dataMoment.diff(dia)
        if(diff==0){
        dataTopo.appendChild(MontaTarefa(tarefa, id))
        }
    })

    return dataTopo
}
