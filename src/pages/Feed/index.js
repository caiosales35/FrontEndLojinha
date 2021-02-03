import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingBag } from "react-icons/fi";
import axios from "axios";

import * as CartActions from "../../store/modules/cart/actions";
import "./styles.css";

export default function Feed() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

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

  function handleAddProduct(product) {
    dispatch(CartActions.addToCart(product));
  }

  return (
    <div className="feed-container">
      <main className="container">
        <ul className="catalog">
          {products.map((product) => (
            <li key={product.id} className="product-container">
              <img src={product.image} alt={product.name} />
              <strong>{product.name}</strong>
              <span>R$ {product.price}</span>

              {product.stock > 0 ? (
                <button type="button" onClick={() => handleAddProduct(product)}>
                  <div>
                    <FiShoppingBag size={16} color="#33BFCB" />{" "}
                    {amount[product.id] || 0}
                  </div>
                  <span>Adicionar</span>
                </button>
              ) : (
                <p>Produto indisponível :(</p>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
