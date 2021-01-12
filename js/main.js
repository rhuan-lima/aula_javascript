function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/track/decola-dev-avanade-2021?");
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Você é <b>FERA</b>! Obrigado por clicar!";
    elemento.innerHTML = "Você é <b>FERA</b>! Obrigado por passar!"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui e veja a mensagem!"
    elemento.innerHTML = "Passe o mouse aqui e veja a mensagem!"
}

function load(){
    alert("Página carregada com sucesso!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
var count = 0
while(count < 5);{
    for(count=0; count<=5; count++);
};
*/


/*var idade=prompt("Digite sua idade");
if (idade >= 18){
    alert("Você é maior de idade, seja bem-vindo!");
}else{
    alert("Página proibida, você é menor de idade.")
}
*/