//----------------------------------------------------------------//
                   //Orientação à Objetos//
//----------------------------------------------------------------//

function load() {
alert('Página carregada!')
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}




function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar !! </b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!!")
}

function redirecionar() {
    window.open("https://www.google.com.br/");
    //window.location.href = 'https://www.google.com.br/'
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse!"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    //alert("trocar texto")
}
function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui!"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
    //alert("trocar texto")
}

//----------------------------------------------------------------//


/*      -|-  Variável function -|-

function some(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome,novo_nome);
}

alert(some(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

----------------------------------------------------------------

                Variável se e se nao
var validar
function validaIdade(idade) {
    if (idade >= 18){
        validar = true;
    }else{validar = false}

    return validar
}

var idade = prompt("qual sua idade?")
alert(validaIdade(idade));
console.log(validar)
*/



/*      -|-  data  -|-


var d = new Date()

alert(d.getUTCFullYear());
alert(d.getMonth());
alert(d.getDay());
alert(d.getHours());
console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));

*/

/*      -|- Função de repetiçao for -|-


for (var i=0;i <= 5; i++){
    console.log(i);
}
*/



/*      -|- função de repetição While -|-


var count = 0;
while(count < 10) {
    console.log(count);
    count++
}
*/

/*      -|- If e Else -|-


var idade = prompt("Qual a sua idade?")

if(idade >= 18) {
    alert("maior de idade");
}else{alert("menor de idade")};
*/

/*  -|- lista de dicionários -|-



var dadosDaFruta = [{nome: "maça" , cor: "vermelha"}, {nome: "uva" , cor: "roxa"}]
console.log(dadosDaFruta);
alert(dadosDaFruta[1].nome)
*/

/*      -|- Dicionário -|-



var dadosDaFruta = {nome: "maça", cor: "vermelha"}
console.log(dadosDaFruta.nome);
alert(dadosDaFruta.cor);
*/





/*      -|- ARRAY -|-

var cesta = ["Maça" , "Pêra" , "Uva"]

cesta.push("laranja");
console.log(cesta);
cesta.pop();
console.log(cesta);
console.log(cesta.join(" - "));

console.log(cesta.toString()); */
