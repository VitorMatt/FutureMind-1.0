const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'FutureMind', 
    password: '12345',
    port: 5432, 
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

app.get('/cadastro-profissional', async (req, res) => {

    try {
        const result = await pool.query('SELECT * FROM profissionais');
        res.json(result.rows);

    } catch(err) {

        console.error(err.message);
        res.status(500).json({ error: 'Erro' });
    }

});

app.post('/cadastro-profissional', async (req, res) => {

    const { 
        id_profissional,
        nome_completo,
        cpf,
        telefone,
        preferencias,
        email, 
        crp,
        data_nascimento,
        especializacao,
        preco,
        foto,
        senha,
        abordagem
    } = req.body;

    try {
        
        const result = await pool.query(
            'INSERT INTO profissionais (id_profissionais, nome_completo, cpf, telefone, preferencias, email, crp, data_nascimento, especializacao, preco, foto, senha, abordagem) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
            [
                id_profissional,
                nome_completo,
                cpf,
                telefone,
                preferencias,
                email, 
                crp,
                data_nascimento,
                especializacao,
                preco,
                foto,
                senha,
                abordagem
            ]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar profissional' });
    }
});

app.get('/cadastro-paciente' , async (req, res) => {

    try{
        const result = await pool.query('SELECT * FROM pacientes')
        res.json(result.rows)
    } catch(err) {

        console.error(err.message);
        res.status(500).json({ error: 'Erro' });
    }

})

app.post('/cadastro-paciente', async (req,res) =>{

    const { 
        id_paciente,
        nome_completo,
        cpf,
        data_nascimento,
        email, 
        telefone,
        senha,
        foto
    } = req.body;

    try {
        
        const result = await pool.query(
            'INSERT INTO pacientes (id_paciente, nome_completo, cpf, data_nascimento, email, telefone, senha, foto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [
                id_paciente,
                nome_completo,
                cpf,
                data_nascimento,
                email, 
                telefone,
                senha,
                foto
            ]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar paciente' });
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

app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    console.log('Recebendo dados de login:', req.body); // Log dos dados recebidos

    var user = false;

    const profissionais = await pool.query('SELECT * FROM profissionais;')
    const pacientes = await pool.query('SELECT * FROM pacientes;')

    for (i=0; i<profissionais.rows.length; i++) {

        if (email==profissionais.rows[i].email && senha==profissionais.rows[i].senha) {

            user = true;
            break;
        };
    }

    for (i=0; i<pacientes.rows.length; i++) {

        if (email==pacientes.rows[i].email && senha==pacientes.rows[i].senha) {

            user = true;
            break;
        };
    }

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