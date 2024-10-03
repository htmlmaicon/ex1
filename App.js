const http = require('http');
const fs = require('fs');  

const requestListener = function (req, res) {
    if (req.url === "/") {
        res.writeHead(200);
        res.end("BEM VINDO!");
    } else if (req.url === "/sobre") {
        fs.readFile('sobre.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Erro ao ler o arquivo");
            } else {
                res.writeHead(200);
                res.end(data);  
            }
        });
    } else {  
        res.writeHead(404);
        res.end("Página não encontrada");
    }
};

const server = http.createServer(requestListener);

server.listen(8080, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:8080");
});