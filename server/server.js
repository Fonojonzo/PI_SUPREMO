const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin:KTetKihi5HFFFFul@api.f7iqgkm.mongodb.net/api?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  nome: String,
  email: String,
  username: String,
  senha: String,
});

const pontuacaoSchema = new mongoose.Schema({
  username: String,
  pontuacao: Number,
  idJogo: Number,
});

const User = mongoose.model('User', userSchema);
const Pontuacao = mongoose.model('Points', pontuacaoSchema);


app.post('/api/pontuacao', async (req, res) => {
  try {
    const { username, pontuacao, idJogo } = req.body;

    // Verificar se já existe uma pontuação para o mesmo usuário e jogo
    const existingPontuacao = await Pontuacao.findOne({ username, idJogo });

    if (!existingPontuacao || pontuacao > existingPontuacao.pontuacao) {
      // Se não existe ou a nova pontuação é maior, atualize ou crie um novo documento
      await Pontuacao.findOneAndUpdate(
        { username, idJogo },
        { $set: { pontuacao, idJogo } },
        { upsert: true, new: true }
      );

      return res.status(200).json({ message: 'Pontuação salva com sucesso' });
    } else {
      return res.status(200).json({ message: 'Pontuação existente é maior, não foi atualizada' });
    }
  } catch (error) {
    console.error('Erro ao salvar/atualizar pontuação:', error);
    return res.status(500).json({ error: 'Erro ao salvar/atualizar pontuação' });
  }
});

// pega os melhores do banco de dados do ID que solicitei.
app.get('/api/ranking/:idJogo', async (req, res) => {
  try {
    const { idJogo } = req.params;
    const rankings = await Pontuacao.find({ idJogo: parseInt(idJogo) })
      .sort({ pontuacao: -1 })
      .limit(10);
    return res.status(200).json(rankings);
  } catch (error) {
    console.error('Erro ao obter ranking:', error);
    return res.status(500).json({ error: 'Erro ao obter ranking' });
  }
});



app.post('/api/usuarios', async (req, res) => {
  try {
    const { nome, email, username, senha } = req.body;

    if (!nome || !email || !username || !senha) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Usuário já existente. Por favor, escolha outro email ou username.' });
    }

    const newUser = new User({ nome, email, username, senha });
    await newUser.save();
    return res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

app.post('/api/usuarios/login', async (req, res) => {
  try {
    const { username, senha } = req.body;

    if (!username || !senha) {
      return res.status(400).json({ error: 'Nome de usuário e senha são obrigatórios!' });
    }
    const user = await User.findOne({ username, senha });

    if (user) {
      return res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return res.status(500).json({ error: 'Erro ao fazer login...' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor na porta: ${PORT}`);
});
