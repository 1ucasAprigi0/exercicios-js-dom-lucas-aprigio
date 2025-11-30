function inserirTitulo() {
    let inputElemento = document.getElementById("txt-titulo");
    let valorDigitado = inputElemento.value;

    let h1Elemento = document.getElementById("titulo");

    h1Elemento.innerText = valorDigitado;

    h1Elemento.style.color = "blue";
}