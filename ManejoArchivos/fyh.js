// const promediar = (a, b) => (a + b) / 2
// const p = promediar(4, 8)
// console.log(p)

// const ejecutar = unaFuncion => unaFuncion()
// const saludar = () => console.log('saludos')
// ejecutar(saludar)

const fs = require('fs')

// const data = fs.readFileSync('./package.json', 'utf-8')
// console.log(data)

// fs.writeFileSync('./test.txt', 'ESTO ES UNA PRUEBA DESDE NODEJS')

// fs.appendFileSync('./test.txt', '\nMODIFICACION DESDE NODEJS');

try {
    fs.writeFileSync('./fyh.txt', Date().toString(), 'utf-8')
    const fyh = fs.readFileSync('./fyh.txt', 'utf-8') 
    console.log(fyh)
} catch (err) {
    throw new Error(err)
}


// fs.readFile('.\package.json', 'utf-8', (error, contenido) => {
    
// })
