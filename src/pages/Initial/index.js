import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import message from "../../components/MessageAlert/messageAlert";
import initialImage from "../../assets/images/laptop.png";
import logoImage from "../../assets/images/logo2.png";
import "./styles.css";

function Initial() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    if (email === "caio@teste.com" && password === "caio123") {
      message("Sucesso", "Login efetuado :)");
      // redirecionar para a tela de produtos
    } else {
      message("Erro", "Email ou senha incorretos...");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="logon-container initial-bg">
      <img src={initialImage} alt="lojinha" className="d-none d-sm-block" />
      <section className="form text-center">
        <img src={logoImage} alt="Logo Lojinha" />
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <a className="back-link" to="/register">
            <FiLogIn size={16} color="#4e44dd" />
            Criar meu cadastro
          </a>
        </form>
      </section>
    </div>
  );
}

export default Initial;
