const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'FutureMind', 
    password: 'Vitor281207.',
    port: 5432, 
});

// Habilitar CORS para todas as rotas
app.use(cors({
    origin: 'http://localhost:5173', // URL do seu frontend
}));
app.use(express.json());

app.get('/', async(req, res) => {

    try {

        const result = await pool.query('SELECT * FROM profissionais');

        if (result.rows.length > 0) {

            res.status(200).json(result.rows);
        } else {

            res.status(404).json('Erro ao buscar profissionais')
        }
    } catch (err) {
    
        console.err('Erro no servidor');
        res.status(500).json({err: 'erro'});
    }
});

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

// app.put('/perfil-profissional/:id', async(req, res) => {

//     const { id_profissional } = req.params.id_profissional;

//     const {
//         nome_completo,
//         cpf,
//         telefone,
//         preferencias,
//         email, 
//         crp,
//         data_nascimento,
//         especializacao,
//         preco,
//         foto,
//         senha,
//         abordagem,
//         descricao 
//     } = req.body;

//     try {

//         const result = await pool.query('UPDATE profissionais SET nome_completo = $1, cpf = $2, telefone = $3, preferencias = $4, email = $5, crp = $6, data_nascimento = $7, especializacao = $8, preco = $9, foto = $10, senha = $11, abordagem = $12, descricao = $13 WHERE id_profissional = $14 RETURNING *', [
//             nome_completo,
//             cpf,
//             telefone,
//             preferencias,
//             email, 
//             crp,
//             data_nascimento,
//             especializacao,
//             preco,
//             foto,
//             senha,
//             abordagem,
//             descricao,
//             id_profissional
//         ]);

//         if (result.rows.length === 0) {

//             return res.status(404).json({ Erro: 'Profissional não encontrado' });
//         }

//         res.json(result.rows[0]);

//     } catch (err) {

//         console.error(err.message);
//         return res.status(500).json({ Erro: 'Erro ao atualizar profissional' });
//     }
// });

// app.delete('/perfil-profissional', async (req, res) => {

//     const { id_profissional } = req.params;

//     try {

//         const result = await pool.query('DELETE FROM profissionais WHERE id_profissional = $1 RETURNING *', [
//             id_profissional
//         ]);

//         if (result.rows.length === 0) {

//             res.status(404).json({ Erro: 'Profissional não encontrado' })
//         }

//         res.json(result.rows[0]);
//     } catch (err) {

//         console.error(err.message);
//         res.status(500).json({Erro: 'Erro ao excluir profissional'})
//     }
// });

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


var user;

app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    console.log('Recebendo dados de login:', req.body); // Log dos dados recebidos


    var profissionais = await pool.query('SELECT * FROM profissionais WHERE email = $1 AND senha = $2', [email, senha]);
    var pacientes = await pool.query('SELECT * FROM pacientes WHERE email = $1 AND senha = $2', [email, senha]);
    
    if (profissionais.rows.length > 0) {
        
        user = profissionais.rows[0];
        console.log('Login bem-sucedido:', profissionais.rows[0]);
        return res.status(200).json(profissionais.rows[0]);
    } 
    
    if (pacientes.rows.length > 0) {
        
        user = pacientes.rows[0];
        console.log('Login bem-sucedido:', user);
        return res.status(200).json(pacientes.rows[0]);
    }
    
    console.log('Credenciais inválidas');
    return res.status(401).json({ message: 'Credenciais inválidas' });
});

app.get('/login', async (req, res) => {
    try {
        
        res.send(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
});

// Rota de busca de profissionais
app.get('/api/profissionais', async (req, res) => {
    const { query } = req.query; // Captura o termo de busca da query string
  
    try {
      // Realiza a consulta na tabela profissionais
      const result = await pool.query(
        `SELECT * FROM profissionais WHERE nome_completo ILIKE $1`, // Busca case-insensitive
        [`%${query}%`] // Adiciona o termo de busca com curingas
      );
  
      res.status(200).json(result.rows); // Retorna os resultados
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Erro ao buscar profissionais' });
    }
  });

  app.get('/profissional/:id', async(req, res) => {

    const { id } = req.params;

    try {

        const result = await pool.query('SELECT * FROM profissionais WHERE id_profissional = $1', [id]);

        if (result.rows.length) {

            res.status(200).json(result.rows[0]);
        } else {

            res.status(404).json({ message: 'Profissional não encontrado'})
        }
    } catch (err) {

        res.status(500).json('Erro');
    }
  });

  app.put('/admin-profissional', async(req, res) => {

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
        abordagem,
        descricao 
    } = req.body;

    try {

        const result = await pool.query('UPDATE profissionais SET nome_completo = $1, cpf = $2, telefone = $3, preferencias = $4, email = $5, crp = $6, data_nascimento = $7, especializacao = $8, preco = $9, foto = $10, senha = $11, abordagem = $12, descricao = $13 WHERE id_profissional = $14 RETURNING *', [
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
            descricao,
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

app.delete('/admin-profissional', async (req, res) => {

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

app.put('/admin-paciente', async(req, res) => {

    const { id_paciente } = req.params;

    const {
        nome_completo,
        cpf,
        telefone,
        email, 
        data_nascimento,
        foto,
        senha,
        descricao 
    } = req.body;

    try {

        const result = await pool.query('UPDATE pacientes SET nome_completo = $1, cpf = $2, telefone = $3, email = $4, data_nascimento = $5, foto = $6, senha = $7, descricao = $8 WHERE id_paciente = $9 RETURNING *', [
            nome_completo,
            cpf,
            telefone,
            email, 
            data_nascimento,
            foto,
            senha,
            descricao,
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

app.delete('/admin-paciente', async (req, res) => {

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

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});