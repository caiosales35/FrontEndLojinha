import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/modules/auth/actions";

import signIn from "../../services/auth";
import message from "../../components/MessageAlert/messageAlert";
import initialImage from "../../assets/images/laptop.png";
import logoImage from "../../assets/images/logo2.png";
import "./styles.css";

function Initial() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    signIn(email, password)
      .then((response) => {
        dispatch(login(response.user));
        history.push("/feed");
      })
      .catch((erro) => {
        message("Erro", erro);
        setEmail("");
        setPassword("");
      });
  }

  return (
    <div className="logon-container initial-bg">
      <img src={initialImage} alt="lojinha" className="d-none d-sm-block" />
      <section className="form">
        <img src={logoImage} alt="Logo Lojinha" />
        <form onSubmit={handleLogin}>
          <label htmlFor="idEmail">Email:</label>
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            id="idEmail"
          />
          <label htmlFor="idSenha">Senha:</label>
          <input
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="password"
            id="idSenha"
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#4e44dd" />
            Criar meu cadastro
          </Link>
        </form>
      </section>
    </div>
  );
}

export default Initial;
