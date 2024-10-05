const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Página Inicial</title>
            </head>
            <body>
                <h1>JNF</h1>
            </body>
        </html>
    `);
});

app.get('/api/data', (req, res) => {
    const data = {
        name: "Seu Nome",
        occupation: "Estudante",
        location: "Cidade, País"
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
