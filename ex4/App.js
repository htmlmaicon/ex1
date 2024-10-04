const http = require('http');

const requestListener = function (req, res) {

    if (req.url.startsWith("/saudacao/")) {

        const nome = req.url.split("/")[2];  
        if (nome) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Olá, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`);
        } else {
            res.writeHead(400);
            res.end("Por favor, forneça um nome na saudação, ex: /saudacao/seu_nome");
        }
    } else if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("BEM VINDO!");
    } else if (req.url === '/sobre') {
        res.writeHead(300, { 'Content-Type': 'text/plain' });
        res.end("Minhas informações aqui!");
    } else if (req.url === '/contato') {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("Meu contato aqui!");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Página não encontrada");
    }
};

const server = http.createServer(requestListener);
server.listen(8080, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:8080");
});
