//OBTENDO ELEMENTOS DO DOCUMENTO HTML
const slider = document.querySelector(".slider"),
      title = document.querySelector(".title"),
      body = document.querySelector("body");

//CLICK EVENT TO SWITCH THEME
slider.addEventListener("click", () => {

    body.classList.toggle("dark")

    if (body.classList.contains("dark")) {
        title.innerHTML = "Escuro";
    } else {
        title.innerHTML = "Claro";
    }
})