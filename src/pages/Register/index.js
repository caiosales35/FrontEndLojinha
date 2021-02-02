import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import message from "../../components/MessageAlert/messageAlert";
import validarCpf from "validar-cpf";

import "./styles.css";
import logoImg from "../../assets/images/logo.png";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateB, setDateB] = useState("");
  const [cpf, setCpf] = useState("");

  function validarNasc(dateB) {
    const today = new Date();
    return today > new Date(dateB) ? true : false;
  }

  async function handleRegister(e) {
    e.preventDefault();

    console.log(dateB);

    if (!validarCpf(cpf)) {
      message("Erro!", "CPF invalido");
    }

    if (!validarNasc(dateB)) {
      message("Erro!", "Data de nascimento invalida");
    }

    if (validarCpf(cpf) && validarNasc(dateB)) {
      message("Sucesso!", "Cadastro realizado com sucesso");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Lojinha logo" />
          <p>Faça seu cadastro e entre na plataforma!</p>
          <a className="back-link" to="/">
            <FiArrowLeft size={16} color="#4e44dd" />
            Já tenho cadastro
          </a>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="CPF - apenas números"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Data de nascimento"
            value={dateB}
            onChange={(e) => setDateB(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="button">
            Criar meu cadastro
          </button>
        </form>
      </div>
    </div>
  );
}
