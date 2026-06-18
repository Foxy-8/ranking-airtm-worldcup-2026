const matchForm =
document.getElementById("matchForm");

const resultForm =
document.getElementById("resultForm");

const processBtn =
document.getElementById("processBtn");

matchForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const teamA =
document.getElementById("teamA").value;

const teamB =
document.getElementById("teamB").value;

const matchDate =
document.getElementById("matchDate").value;

alert(
`Partido creado:

${teamA}
vs
${teamB}

Fecha:
${matchDate}`
);

}
);

resultForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const winner =
document.getElementById("winner").value;

alert(
`Resultado registrado:

${winner}`
);

}
);

processBtn.addEventListener(
"click",
function(){

alert(
"OCR Discord será conectado en la Parte 3"
);

}
);
