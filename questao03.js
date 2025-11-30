function cadastrarUsuario() {
    let nome = document.getElementById("nome").value;
    let dataNascimento = document.getElementById("dataNasc").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("uf").value;

    let frase = `${nome} nasceu no dia ${dataNascimento} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`;

    let elementoResultado = document.getElementById("resultado");
    
    elementoResultado.innerText = frase;
    elementoResultado.style.color = "green";
    elementoResultado.style.fontSize = "24px";
}