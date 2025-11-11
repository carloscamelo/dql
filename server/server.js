require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('../public')); // <- adiciona esta linha

// Configura Nodemailer
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Rota de envio
app.post('/enviar', async (req, res) => {
  try {
    const { nome, email, telefone, tipo_projeto, metragem, servicos, mensagem } = req.body;
    const servicosTexto = servicos && servicos.length > 0 ? servicos.map(s => `• ${s}`).join('\n') : 'Nenhum serviço selecionado';

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Contato DQL - ${nome}`,
      text: `Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Tipo de projeto: ${tipo_projeto}
Metragem da planta: ${metragem}
Serviços desejados:
${servicosTexto}
Mensagem adicional: ${mensagem}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ ok: true, message: 'E-mail enviado com sucesso' });
  } catch (err) {
    console.error('Erro ao enviar email', err);
    res.status(500).json({ ok: false, error: 'Erro ao enviar e-mail' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
