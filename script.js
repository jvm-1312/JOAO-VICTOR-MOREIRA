function enviarFormulario(event) {
  event.preventDefault();
//DADOS DIGITADOS NOS CAMPOS
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;
// CERTIFICA QUE OS CAMPOS ESTAO PREENCHIDOS
  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return;
  }
//CERTIFICA QUE FOI UTILIZADO UM EMAIL NO CAMPO
  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um email válido!");
    return;
  }
//ALERTA DE VALIDADE
  alert("Mensagem enviada com sucesso!");
//LIMPA PÓS ENVIO
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensagem").value = "";
}
