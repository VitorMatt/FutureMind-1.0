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
            'INSERT INTO profissionais (id_profissional, nome_completo, cpf, telefone, preferencias, email, crp, data_nascimento, especializacao, preco, foto, senha, abordagem) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
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

app.put('/perfil-profissional', async(req, res) => {

    const { id_profissional } = req.params;
    const {
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

        const result = await pool.query('UPDATE profissionais SET nome_completo = $1, cpf = $2, telefone = $3, preferencias = $4, email = $5, crp = $6, data_nascimento = $7, especializacao = $8, preco = $9, foto = $10, senha = $11, abordagem = $12 WHERE id_profissional = $13 RETURNING *', [
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
            abordagem,
            id_profissional
        ]);

        if (result.rows.length === 0) {

            return res.status(404).json({ Erro: 'Profissional não encontrado' });
        }

        res.json(result.rows[0]);

    } catch (err) {

        console.error(err.message);
        return res.status(500).json({ Erro: 'Erro ao atualizar profissional' });
    }
});

app.delete('/perfil-profissional', async (req, res) => {

    const { id_profissional } = req.params;

    try {

        const result = await pool.query('DELETE FROM profissionais WHERE id_profissional = $1 RETURNING *', [
            id_profissional
        ]);

        if (result.rows.length === 0) {

            res.status(404).json({ Erro: 'Profissional não encontrado' })
        }

        res.json(result.rows[0]);
    } catch (err) {

        console.error(err.message);
        res.status(500).json({Erro: 'Erro ao excluir profissional'})
    }
});

app.put('/perfil-paciente', async(req, res) => {

    const { id_paciente } = req.params;
    const {
        nome_completo,
        cpf,
        telefone,
        email, 
        data_nascimento,
        foto,
        senha,
    } = req.body;

    try {

        const result = await pool.query('UPDATE profissionais SET nome_completo = $1, cpf = $2, telefone = $3, email = $4, data_nascimento = $5, foto = $6, senha = $7 WHERE id_paciente = $8 RETURNING *', [
            nome_completo,
            cpf,
            telefone,
            email, 
            data_nascimento,
            foto,
            senha,
            id_paciente
        ]);

        if (result.rows.length === 0) {

            return res.status(404).json({ Erro: 'Paciente não encontrado' });
        }

        res.json(result.rows[0]);

    } catch (err) {

        console.error(err.message);
        return res.status(500).json({ Erro: 'Erro ao atualizar paciente' });
    }
});

app.delete('/perfil-paciente', async (req, res) => {

    const { id_paciente } = req.params;

    try {

        const result = await pool.query('DELETE FROM pacientes WHERE id_paciente = $1 RETURNING *', [
            id_paciente
        ]);

        if (result.rows.length === 0) {

            res.status(404).json({ Erro: 'Paciente não encontrado' })
        }

        res.json(result.rows[0]);
    } catch (err) {

        console.error(err.message);
        res.status(500).json({Erro: 'Erro ao excluir paciente'})
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