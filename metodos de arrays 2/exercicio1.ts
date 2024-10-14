const aqruivos = ['foto.jpeg', 'arq.json', 'java.ts', 'java.js', 'foto.bat']

const antivirus = (listaArquivos: string[]) => {
    const resultado = listaArquivos.some((item) => {
        const existevirus = item.includes('.bat') 
        return existevirus
    })

    if (resultado) {
        console.log ('virus detectado')
    } else {console.log('nenhum virus encontrado')}
}

antivirus(aqruivos)