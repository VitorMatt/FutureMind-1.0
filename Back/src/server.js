const express = require('express');
const cors = require('cors');

const app = express();


// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

app.get('/login', async (req, res) => {
    try {
        
        
        res.send('back end funcionando')
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
});



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});