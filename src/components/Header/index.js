import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiPower } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logout } from "../../store/modules/auth/actions";

import "./styles.css";

import logo from "../../assets/images/logo.png";

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <header className="header">
      <Link to="/feed" className="logo">
        <img className="logo-icon" src={logo} alt="Lojinha" />
      </Link>

      <div className="menu">
        <Link to="/cart" className="header-cart">
          <div>
            <strong>Carrinho</strong>
            <span>
              <strong>{cartSize}</strong> Produtos
            </span>
          </div>
          <FiShoppingBag size={36} color="#FFF" />
        </Link>
        <button onClick={handleLogout}>
          <FiPower size={36} color="#FFF">
            Logout
          </FiPower>
        </button>
      </div>
    </header>
  );
}
