function mudarForma() {
    let divForma = document.getElementById("forma");
    let botao = document.getElementById("btn-forma");

    if (divForma.style.borderRadius === "0%" || divForma.style.borderRadius === "0px") {       
        divForma.style.borderRadius = "50%";
        botao.innerText = "Mudar forma";

    } else {
        divForma.style.borderRadius = "0%";
        botao.innerText = "Retornar forma original";
    }
}