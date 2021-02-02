import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import axios from "axios";

import "./styles.css";

import logoImg from "../../assets/images/logo.png";

export default function Feed() {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getProducts() {
      axios
        .get("https://5d6da1df777f670014036125.mockapi.io/api/v1/product")
        .then((response) => {
          setProducts(response.data);
        });
    }
    getProducts();
  }, []);

  function handleAdd(id) {}

  function handleDel(id) {}

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="feed-container">
      <header>
        <img src={logoImg} alt="Logo Lojinha" />
        <span>Bem Vindo, USUARIO {}!</span>
        <Link className="button" to="/cart">
          Meu carrinho
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#4e44dd" />
        </button>
      </header>
      <h1>Produtos preparados especialmete para você!</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div class="product">
              <img src={product.image} alt={product.name} />
              <p>
                <p>{product.name}</p> <p>R$ {product.price}</p>
              </p>
            </div>
            <div class="cart-buttons">
              <button
                onClick={() => handleAdd(product.id)}
                type="button"
                className="button-add"
              >
                +
              </button>
              <p>0</p>
              <button
                onClick={() => handleDel(product.id)}
                type="button"
                className="button-del"
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
