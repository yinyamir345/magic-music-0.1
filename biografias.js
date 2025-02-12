function searchWikipedia() {
  const query = document.getElementById("searchInput").value;
  const url = `https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const results = data.query.search;
      let output = "<h2>Resultados:</h2>";
      results.forEach((item) => {
        output += `<h3>${item.title}</h3><p>${item.snippet}... <a href="https://es.wikipedia.org/wiki/${item.title}" target="_blank">Leer más</a></p>`;
      });
      document.getElementById("result").innerHTML = output;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
