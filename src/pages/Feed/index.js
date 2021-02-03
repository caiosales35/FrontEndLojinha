import { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import axios from "axios";

import "./styles.css";

export default function Feed() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="feed-container">
      <main className="container">
        <ul className="catalog">
          <li className="product-container">
            <img src="" alt="" />
            <strong></strong>
            <span>R$ </span>
            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" /> 0
              </div>
              <span>Adiconar</span>
            </button>
          </li>
          <li className="product-container">
            <img src="" alt="" />
            <strong></strong>
            <span>R$</span>
            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" /> 0
              </div>
              <span>Adiconar</span>
            </button>
          </li>
          <li className="product-container">
            <img src="" alt="" />
            <strong></strong>
            <span>R$</span>
            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" /> 0
              </div>
              <span>Adiconar</span>
            </button>
          </li>
          <li className="product-container">
            <img src="" alt="" />
            <strong></strong>
            <span>R$</span>
            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" /> 0
              </div>
              <span>Adicionar</span>
            </button>
          </li>
        </ul>
      </main>
    </div>
  );
}
