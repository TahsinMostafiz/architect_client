export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  //get JWT Token
  fetch("https://architect-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("architect-token", data.token);
    });
};
