import React from "react";

import { FiPlusCircle, FiMinusCircle, FiXCircle } from "react-icons/fi";

import "./styles.css";

function Cart() {
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
            <tr>
              <td>
                <button type="button" onClick={() => {}}>
                  <FiXCircle size={20} color="#33BFCB" />
                </button>
              </td>
              <td>
                <strong>JavaScript: O Guia Definitivo - R$ 146,08</strong>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => {}}>
                    <FiMinusCircle size={20} color="#33BFCB" />
                  </button>
                  <input type="number" readOnly value="1" />
                  <button type="button" onClick={() => {}}>
                    <FiPlusCircle size={20} color="#33BFCB" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 1000,00</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <footer>
          <button type="button">Finalizar Compra</button>
          <div className="total">
            <span>Total: R$ 1000,00</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Cart;
