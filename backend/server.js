const express = require("express");
const axios = require("axios"); // Biblioteca para requisição HTTP
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Importa o modelo criado
const Address = require("../backend/model/Address");

// Carrega as variáveis de ambiente .env
dotenv.config();

// Criar o Express (Servidor)
const app = express();
 
//Obtém as credenciais do MongoDB armazenada no .env
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Cria a string de conexão com o MongoDB
const mongoURI = `mongo+srv://${dbUser}:${dbPassword}@projectapi.ve88g.mongodb.net/?retryWrites=true&w=majority&appName=ProjectAPI`;

// Cria a string de conexão com o servidor irá executar
const port = 3000;

mongoose
  .connect(mongoURI) // Conecta ao banco pela linl
  .then(() => {
    // Quando for conecto corretamente
    console.log("Conectou ao banco!"); // Exibe uma mensagem no console
    // Inicia o servidor após o banco de dados conectar
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch(err => console.log("Erro ao conectar ao MongoDB!", err)); // Exibe o erro
