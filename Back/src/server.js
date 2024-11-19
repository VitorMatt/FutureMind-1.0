const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'FutureMind', // Nome da sua database
    password: '12345', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});

// Habilitar CORS para todas as rotas
app.use(cors({
    origin: 'http://localhost:5173', // URL do seu frontend
}));
app.use(express.json());

const users = [
    {
        email: 'lucas@gmail.com',
        senha: '123'
    },
    {
        email: 'vitor@gmail.com',
        senha: '123'
    }
];

var user = {email: '', senha: ''};

app.get('/cadastro', async (req, res) => {

    try {
        const result = await pool.query('SELECT * FROM profissionais');
        res.json(result.rows);

    } catch(err) {

        console.error(err.message);
        res.status(500).json({ error: 'Erro' });
    }

});

app.get('/login', async (req, res) => {
    try {
        
        res.send(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    console.log('Recebendo dados de login:', req.body); // Log dos dados recebidos

    user = users.find(user => user.email === email && user.senha === senha);
    if (user) {
        console.log('Login bem-sucedido:', user);
        return res.status(200).json(user);
    }

    console.log('Credenciais inválidas');
    return res.status(401).json({ message: 'Credenciais inválidas' });
});



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});