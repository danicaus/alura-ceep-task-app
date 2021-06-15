export const removeDatasRepetidas = (datas) => {
    const datasUnicas = []
    datas.forEach((dia) => {
        if(datasUnicas.indexOf(dia.data) === -1){
            datasUnicas.push(dia.data)
        }
    })
    return datasUnicas
}

export const ordenaDatas = (data) => {
    data.sort((a,b) => {
        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
        return primeiraData - segundaData
    })
}