const fs = require('fs')

leerarchivo () {
    fs.promises.readFile("./info.txt", "utf-8")
    .then(data) => {
        if (!data) throw new Error("no hay data");    }
        const info = JSON.parse(data);

        console.log(info);

        info.contenidoObj.author = "CoderHouse";

        return info.contenidoObj;
}
.then((data => {
    fs.writeFile("./package.json.coder", JSON.stringify(data, null, 2));  
})
.catch((error) => console.log(error))
)