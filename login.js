// login.js
const form = document.getElementById("loginForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {
    username: formData.get("yin yamir"),
    password: formData.get("Diyus0304*"),
  };

  try {
    const response = await fetch("/guardar-datos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Verificar si la respuesta es válida
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (error) {
    console.error("Error:", error);
    alert("Hubo un problema al procesar la solicitud. Intenta de nuevo.");
  }
  window.location.href = "index.html";
});
