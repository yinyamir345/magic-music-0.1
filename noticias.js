let news = document.getElementById("news");
let noti = news;

function api_con_axios() {
  axios({
    method: "GET",
    url: "https://gnews.io/api/v4/top-headlines?category=general&apikey=e4fba7614d4bd19d94f8011b84bc2b40",
  }).then((res) => {
    let noticias = res.data.articles;
    console.log(noticias);
    noticias.map((elemento) => {
      let div = document.createElement("div");
      div.className = "noticia"; // Agregar clase para aplicar estilos
      div.innerHTML = `
        <img src="${elemento.image}" alt="${elemento.title}">
        <h1>${elemento.title}</h1>
        <h3>${elemento.description}</h3>
       <a href="${elemento.url}" target="_blank">Seguir leyendo</a>`;
      noti.appendChild(div);
    });
  });
}

api_con_axios();
