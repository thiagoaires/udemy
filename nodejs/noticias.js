let http = require('http');

let server = http.createServer((req, res) =>{
    
    let categoria = req.url;
    
    if (categoria == '/tecnologia'){
        res.end('<html><body>noticias tecnologia</body></htnml>');
    } else  if(categoria == '/moda'){
        res.end('<html><body>noticias moda</body></htnml>');
    } else  if(categoria == '/beleza'){
        res.end('<html><body>noticias beleza</body></htnml>');
    } else{
        res.end('<html><body>Portal Noticias</body></htnml>');
    }
});

server.listen(3000);