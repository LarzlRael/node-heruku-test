
const path = require('http')

path.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write('hola mundo');
    let data= {
        nombre:'rey',
        edad:32,
        url:req.url
    }
    res.write(JSON.stringify(data))
    res.end()
})
.listen(8080);
console.log('escuando desde el puerto 8080')

