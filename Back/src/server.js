const express = require('express');
const cors = require('cors');

const app = express();


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

// var result;

// app.post('/', async (req, res) => {

//     const { busca }  = req.body;

//     result = users.find(user => user.email === busca);

//     if (result) return res.status(200).json(result)
//     else return res.status(401).json('no results');
// });

// app.get('/', async (req, res) => {

//     res.send(result);
// });

var user = {email: '', senha: ''};

app.get('/cadastro', async (req, res) => {

    try {

        res.send('Back end na rota cadastro')
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