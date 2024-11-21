const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// const pool = new Pool({
//     user: 'postgres', 
//     host: 'localhost',
//     database: 'FutureMind', 
//     password: '12345',
//     port: 5432, 
// });

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

// app.get('/cadastro', async (req, res) => {

//     try {
//         const result = await pool.query('SELECT * FROM profissionais');
//         res.json(result.rows);

//     } catch(err) {

//         console.error(err.message);
//         res.status(500).json({ error: 'Erro' });
//     }

// });

// var user3 = {a: 'a'};

// app.get('/cadastro', async (req, res) => {

//     try {
       
//         res.send(user3);

//     } catch(err) {

//         console.error(err.message);
//         res.status(500).json({ error: 'Erro' });
//     }

// });

// app.post('/cadastro', async (req, res) => {

//     const { 
//         nome_completo,
//         cpf,
//         telefone,
//         preferencias,
//         data_nascimento,
//         especializacao,
//         senha,
//         foto,
//         abordagem,
//         email } = req.body;

//     try {
        
//         // const result = await pool.query(
//         //     'INSERT INTO clientes (nome_completo, endereco, email, telefone) VALUES ($1, $2, $3, $4) RETURNING *',
//         //     [user.nome_completo, endereco, email, telefone]
//         // );
//         res.status(201).json(nome_completo);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ error: 'Erro ao adicionar cliente' });
//     }
// });

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