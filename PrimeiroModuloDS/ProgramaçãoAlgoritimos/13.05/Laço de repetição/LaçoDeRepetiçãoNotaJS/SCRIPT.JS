var nota, soma, media 
soma = 0 

for(var contador=1; contador <=4; contador++){
    nota = parsefloat(prompt("Digite a nota: "));

    soma = soma + nota
}
    media = nota/4 

    console.log("Sua média foi: ", media)
    alert("Sua media é: "+ media)

    