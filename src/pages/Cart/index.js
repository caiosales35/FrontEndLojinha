import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiPlusCircle, FiMinusCircle, FiXCircle } from "react-icons/fi";
import getValidaCupom from "../../services/cupom";
import message from "../../components/MessageAlert/messageAlert";
import * as CartActions from "../../store/modules/cart/actions";
import * as OrderActions from "../../store/modules/order/actions";
import "./styles.css";

function Cart() {
  const [payment, setPayment] = useState("boleto");
  const [cupom, setCupom] = useState("");
  const [desconto, setDesconto] = useState(0);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [vData, setVData] = useState("");
  const [sCode, setSCode] = useState("");
  const [months, setMonths] = useState("");
  const user = useSelector((state) => state.auth.user);

  const [isCard, setIsCard] = useState(false);
  const dispatch = useDispatch();

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: product.price * product.amount,
    }))
  );

  const total = useSelector((state) =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)
  );

  const [totalDesconto, setTotalDesconto] = useState(total);
  useEffect(() => {
    setTotalDesconto(total - total * desconto);
  }, [total, desconto]);

  function increment(product) {
    dispatch(
      CartActions.updateAmount({
        id: product.id,
        amount: product.amount + 1,
      })
    );
  }

  function decrement(book) {
    dispatch(
      CartActions.updateAmount({
        id: book.id,
        amount: book.amount - 1,
      })
    );
  }

  function setPaymentMethod(value) {
    setPayment(value);
    value === "boleto" ? setIsCard(false) : setIsCard(true);
  }

  async function validarCupom() {
    // recebe valor entre 0.0 e 1.0 para fazer o desconto
    getValidaCupom(cupom)
      .then((result) => {
        setDesconto(result.desconto);
        message("Cupom aplicado :)");
      })
      .catch((error) => message("Erro :(", error));
  }

  function checkout() {
    const order = {
      cart,
      total,
      totalDesconto,
      cupom,
      desconto,
      payment,
      user,
    };
    // salva no redux, limpa carrinho, e redireciona para pagina de visualizar pedido
    dispatch(OrderActions.addOrder(order));
  }

  return (
    <main className="container">
      <div className="cart-container">
        <table className="product-table">
          <thead>
            <tr>
              <th />
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <FiXCircle size={20} color="#33BFCB" />
                  </button>
                </td>

                <td>
                  <strong>
                    {product.name} - R$ {product.price}
                  </strong>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <FiMinusCircle size={20} color="#33BFCB" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <FiPlusCircle size={20} color="#33BFCB" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$ {product.subtotal.toFixed(3).slice(0, -1)}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="payment-container">
          <div>
            <p>Forma de pagamento:</p>
            <select
              name="payment"
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="boleto">Boleto Bancário</option>
              <option value="cartão">Cartão de Crédito</option>
            </select>
          </div>

          <div>
            <input
              placeholder="Digite seu cupom"
              value={cupom}
              onChange={(e) => setCupom(e.target.value)}
            />
            <button onClick={validarCupom}>Aplicar cupom</button>
          </div>

          <div className="total">
            <span>Total: R$ {total.toFixed(3).slice(0, -1)}</span>
            <span>
              Total com desconto: R$ {totalDesconto.toFixed(3).slice(0, -1)}
            </span>
            <span>
              Pagamento:{" "}
              {payment === "boleto"
                ? "Boleto bancário"
                : "Cartão de crédito, " +
                  months +
                  " x " +
                  (totalDesconto / months).toFixed(3).slice(0, -1)}
            </span>
          </div>
        </div>
        {isCard ? (
          <div className="card-container">
            <input
              placeholder="Nome do titular do cartão"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Número do cartão"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
            <input
              placeholder="Código de segurança"
              value={sCode}
              onChange={(e) => setSCode(e.target.value)}
              required
            />
            <input
              placeholder="Validade mm/aa"
              value={vData}
              onChange={(e) => setVData(e.target.value)}
              required
            />
            <input
              placeholder="Parcelas"
              value={months}
              type="number"
              min="1"
              max="12"
              onChange={(e) => setMonths(e.target.value)}
              required
            />
          </div>
        ) : (
          <></>
        )}

        <footer>
          <button onClick={checkout}>Finalizar Compra</button>
        </footer>
      </div>
    </main>
  );
}

export default Cart;
