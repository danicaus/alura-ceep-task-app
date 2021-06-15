const BotaoDeletar = (atualiza, id)=> {
    const botaoDeletar = document.createElement('button')

    botaoDeletar.classList.add('delete-button')
    botaoDeletar.innerText = 'Deletar'
    botaoDeletar.addEventListener('click', ()=> DeletarTarefa(atualiza, id))

    return botaoDeletar
}

const DeletarTarefa = (atualiza, id)=> {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefasCadastradas.splice(id, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))

    atualiza()
}

export default BotaoDeletar