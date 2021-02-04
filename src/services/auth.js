export default function signIn(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "caio@teste.com" && password === "caio123") {
        resolve({
          token: "dsafajskasjkjak22432421321df",
          user: {
            id: 1,
            name: "Caio Sales",
            email: "caio@teste.com",
          },
        });
      } else {
        reject("unauthorized");
      }
    }, 2000);
  });
}
