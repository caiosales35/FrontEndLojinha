import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import { useHistory } from "react-router-dom";

function Checkout() {
  const history = useHistory();

  const cart = useSelector((state) => state.order.cart);
  const total = useSelector((state) => state.order.total);
  const totalDesconto = useSelector((state) => state.order.totalDesconto);
  const desconto = useSelector((state) => state.order.desconto);
  const payment = useSelector((state) => state.order.payment);
  const { name, email } = useSelector((state) => state.order.user);

  return (
    <main className="container">
      <div className="cart-container">
        <h1>Compra Realizada :)</h1>
        <table className="product-table">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <strong>
                    {product.name} - R$ {product.price}
                  </strong>
                </td>
                <td>
                  <strong>{product.amount}</strong>
                </td>
                <td>
                  <strong>R$ {product.subtotal.toFixed(3).slice(0, -1)}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="checkout-container">
          <div className="total">
            <span>Usuário: {name}</span>
            <span>Email: {email}</span>
            <span>
              Forma de Pagamento:{" "}
              {payment === "boleto" ? "Boleto bancário" : "Cartão de crédito"}
            </span>
          </div>
          <div className="total">
            <span>Total: R$ {total.toFixed(3).slice(0, -1)}</span>
            <span>
              Desconto: R$ {(total * desconto).toFixed(3).slice(0, -1)}
            </span>
            <span>
              Total com desconto: R$ {totalDesconto.toFixed(3).slice(0, -1)}
            </span>
          </div>
        </div>

        <footer>
          <button onClick={() => history.push("/feed")}>Voltar</button>
        </footer>
      </div>
    </main>
  );
}

export default Checkout;
