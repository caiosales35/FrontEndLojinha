import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const message = (title, label) => {
  confirmAlert({
    title: title,
    message: label,
    buttons: [
      {
        label: "Fechar",
      },
    ],
  });
};

export default message;
