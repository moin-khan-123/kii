const url = "https://jobkhuzi-apis-nxmemxk6rq-uc.a.run.app/analyze-cv";

function hello() {
  const access_token = sessionStorage.getItem("access_token");
  const config = {
    method: "POST",
    headers: {
      Authorization: `Token ${access_token}`,
      "Content-Type": "application/json",
    },
  };

  fetch(url, config)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

    });
}
