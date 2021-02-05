export default function getValidaCupom(cupom) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cupom >= 0 && cupom <= 1) {
        resolve({ valid: true, desconto: cupom });
      } else {
        reject("Cupom não autorizado");
      }
    }, 1500);
  });
}
