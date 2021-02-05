import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import validarCpf from "validar-cpf";

import message from "../../components/MessageAlert/messageAlert";
import logoImg from "../../assets/images/logo.png";
import "./styles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateB, setDateB] = useState("");
  const [cpf, setCpf] = useState("");

  const history = useHistory();

  function validarNasc(dateB) {
    const today = new Date();
    return today > new Date(dateB) ? true : false;
  }

  async function handleRegister(e) {
    e.preventDefault();

    if (!validarCpf(cpf)) {
      message("Erro!", "CPF invalido");
    }

    if (!validarNasc(dateB)) {
      message("Erro!", "Data de nascimento invalida");
    }

    if (validarCpf(cpf) && validarNasc(dateB)) {
      message(
        "Cadastro realizado com sucesso",
        "Faça login para começar a comprar",
        history.push("/")
      );
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Lojinha logo" />
          <p>Faça seu cadastro e entre na plataforma!</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#4e44dd" />
            Já tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <label className="label" for="idName">
            Nome:
          </label>
          <input
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autocomplete="name"
            id="idName"
          />
          <label className="label" for="idCpf">
            CPF:
          </label>
          <input
            type="text"
            placeholder="Apenas números"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
            id="idCpf"
          />
          <label className="label" for="idNascimento">
            Data de Nascimento:
          </label>
          <input
            type="date"
            value={dateB}
            onChange={(e) => setDateB(e.target.value)}
            required
            id="idNascimento"
          />
          <label className="label" for="idEmail">
            Email:
          </label>
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autocomplete="name"
            id="idEmail"
          />
          <label className="label" for="idSenha">
            Senha:
          </label>
          <input
            type="password"
            placeholder="Uma senha segura"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autocomplete="new-password"
            id="idSenha"
          />
          <button type="submit" className="button">
            Criar meu cadastro
          </button>
        </form>
      </div>
    </div>
  );
}
