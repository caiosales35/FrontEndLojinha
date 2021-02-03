import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FiShoppingBag } from "react-icons/fi";
import "./styles.css";

import logo from "../../assets/images/logo.png";

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <header className="header">
      <Link to="/feed" className="logo">
        <img className="logo-icon" src={logo} alt="Lojinha" />
      </Link>

      <Link to="/cart" className="header-cart">
        <div>
          <strong>Carrinho</strong>
          <span>
            <strong>{cartSize}</strong> Produtos
          </span>
        </div>
        <FiShoppingBag size={36} color="#FFF" />
      </Link>
    </header>
  );
}
