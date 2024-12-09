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
            'INSERT INTO profissionais (nome_completo, cpf, telefone, preferencias, email, crp, data_nascimento, especializacao, preco, foto, senha, abordagem) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
            [
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
            'INSERT INTO pacientes (nome_completo, cpf, data_nascimento, email, telefone, senha, foto) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [
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
        senha,
        abordagem,
        descricao,
        id_profissional
    } = req.body;

    try {

        const result = await pool.query('UPDATE profissionais SET nome_completo = $1, cpf = $2, telefone = $3, preferencias = $4, email = $5, crp = $6, data_nascimento = $7, especializacao = $8, preco = $9, senha = $10, abordagem = $11, descricao = $12 WHERE id_profissional = $13 RETURNING *', [
            nome_completo,
            cpf,
            telefone,
            preferencias,
            email, 
            crp,
            data_nascimento,
            especializacao,
            preco,
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

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Caminho absoluto da pasta uploads
const uploadDirectory = path.join(__dirname, 'uploads');

// Criação da pasta caso ela não exista
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Configuração do multer para salvar imagens no diretório correto
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory); // Caminho absoluto para a pasta uploads
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Gera um nome único para o arquivo
  },
});

const upload = multer({ storage });
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rota para atualizar a foto do profissional
app.post('/perfil-profissional/foto-perfil', upload.single('foto'), async (req, res) => {
  const { id_profissional } = req.body;
  const fotoPath = req.file ? `/uploads/${req.file.filename}` : null;

  if (!id_profissional || !fotoPath) {
    return res.status(400).json({ Erro: 'ID do profissional ou foto ausente.' });
  }

  try {
    const result = await pool.query(
      'UPDATE profissionais SET foto = $1 WHERE id_profissional = $2 RETURNING *',
      [fotoPath, id_profissional]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ Erro: 'Profissional não encontrado.' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ Erro: 'Erro ao atualizar profissional.' });
  }
});

app.delete('/perfil-profissional/:id_profissional', async (req, res) => {

    const { id_profissional } = req.params;

    try {

        const result = await pool.query('DELETE FROM profissionais WHERE id_profissional = $1', [
            id_profissional
        ]);

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

        const result = await pool.query('UPDATE pacientes SET nome_completo = $1, cpf = $2, telefone = $3, email = $4, data_nascimento = $5, foto = $6, senha = $7 WHERE id_paciente = $8 RETURNING *', [
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

    try {
        // Verifica se o email existe no banco de dados
        const profissional = await pool.query('SELECT * FROM profissionais WHERE email = $1', [email]);
        const paciente = await pool.query('SELECT * FROM pacientes WHERE email = $1', [email]);

        // Verifica se o e-mail pertence a um profissional
        if (profissional.rows.length > 0) {
            const user = profissional.rows[0];
            
            // Valida a senha
            if (user.senha === senha) {
                return res.status(200).json(user);
            } else {
                return res.status(401).json({ message: 'Senha incorreta' });
            }
        }

        // Verifica se o e-mail pertence a um paciente
        if (paciente.rows.length > 0) {
            const user = paciente.rows[0];

            // Valida a senha
            if (user.senha === senha) {
                return res.status(200).json(user);
            } else {
                return res.status(401).json({ message: 'Senha incorreta' });
            }
        }

        // Caso nenhum usuário com o e-mail seja encontrado
        return res.status(404).json({ message: 'Email não cadastrado' });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Erro no servidor' });
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

app.post('/agendamento', async(req, res) => {

    const { horario, data, profissional, paciente} = req.body;

    try {

        const result = await pool.query('INSERT INTO agendamento (horario, data, fk_id_profissionais, fkpaciente_id_paciente) VALUES ($1, $2, $3, $4) RETURNING *', [
            horario,
            data,
            profissional,
            paciente
        ]);

        res.status(200).json(result.rows);
    } catch (err) {

        console.log('erro')
    }
});

app.get('/agendamento', async (req, res) => {

    try {

        const result = await pool.query('SELECT * FROM agendamento');

        res.status(200).json(result.rows);
    } catch (err) {

        console.log({Erro: err.message});
    }
});

app.get('/sugestoes', async(req, res) => {

    try {

        const result = await pool.query('SELECT * FROM sugestoes');

        if (result.rows) {

            res.status(200).json(result.rows);
        }
    } catch (err) {

        console.log('Erro', err.message);
    }
});

app.post('/sugestoes', async(req, res) => {

    const { sugestao } = req.body;

    try {

        const result = await pool.query('INSERT INTO sugestoes (descricao) VALUES ($1) RETURNING *', [sugestao]);
    } catch (err) {

        console.log('Erro', err.message);
    }
})

app.post('/perfil-profissional/agenda', async(req, res) => {

    const { id_profissional } = req.params;

    try {

        const result = await pool.query('SELECT * FROM agendamento WHERE fk_id_profissional = $1', [id_profissional]);

        if (result.rows > 0) {

            return res.status(200).json(result.rows);
        }

        return res.status(404).json("Não encontrado");
    } catch (err) {

        console.log(err.message);
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});