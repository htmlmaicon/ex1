const http = require('http');
const aleatorio = require('./utilis');  

const requestListener = (req, res) => {
    if (req.url === '/numero') {
        const numero = aleatorio(); 
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');  
        res.end(`Número aleatório: ${numero}`);  
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');  
        res.end('Erro na rota, pesquise corretamente jumento'); 
    }
};

const server = http.createServer(requestListener);

server.listen(8080, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:8080");
});
