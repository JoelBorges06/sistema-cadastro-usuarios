const express = require("express");
const app = express();
const PORTA = 3000;
const cors = require("cors");
const {Pool} = require("pg");
const bcrypt = require("bcrypt");
require("dotenv").config();
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor funcionando!");
});

app.get("/sobre", (req, res) => {
    res.send("Essa é a página sobre o nosso projeto!");
});

app.get("/contato", (req, res) => {
    res.send("Entre em contato conosco pelo email: contato@nossoprojeto.com");
});

pool.query("SELECT NOW()", (erro, resultado) => {
    if (erro) {
        console.error("Erro ao conectar ao PostgreSQL:", erro);
    } else {
        console.log("PostgreSQL conectado!");
        console.log("Horário do banco:", resultado.rows[0].now);
    }
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

app.post("/enviar", async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(senha, 10);

        await pool.query(
            "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)",
            [nome, email, hashedPassword]
        );

        res.send("Usuário cadastrado com sucesso!");
    } catch (erro) {
        console.error("Erro ao cadastrar:", erro);
        res.status(500).send("Erro ao cadastrar usuário.");
    }
});