import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const message = (title, label, callback = () => {}) => {
  confirmAlert({
    title: title,
    message: label,
    buttons: [
      {
        label: "Fechar",
        onClick: () => callback,
      },
    ],
    closeOnEscape: false,
    closeOnClickOutside: false,
  });
};

export default message;
