import React from "react";
import { Link } from "react-router-dom";

import { FiShoppingBag } from "react-icons/fi";
import "./styles.css";

import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <Link to="/feed" className="logo">
        <img className="logo-icon" src={logo} alt="Lojinha" />
      </Link>

      <Link to="/cart" className="header-cart">
        <div>
          <strong>Carrinho</strong>
          <span>
            <strong>4</strong> Produtos
          </span>
        </div>
        <FiShoppingBag size={36} color="#FFF" />
      </Link>
    </header>
  );
}
