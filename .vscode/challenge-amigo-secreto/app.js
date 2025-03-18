
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    console.log(listaAmigos);
}
 function sortearAmigo (){
   const random = Math.floor(Math.random() * listaAmigos.length);
   const amigoSecreto = listaAmigos[random];
   ulResultado.innerHTML = ` <li>O amigo secreto é o/a:${amigoSecreto}</li>`;
 }