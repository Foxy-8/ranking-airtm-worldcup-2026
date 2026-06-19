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
async function(){

const files =
document.getElementById(
"screenshots"
).files;

if(files.length===0){

alert(
"Selecciona capturas"
);

return;

}

const names =
await extractNames(files);

const preview =
document.getElementById(
"ocrPreview"
);

preview.innerHTML="";

names.forEach(name=>{

const div =
document.createElement("div");

div.innerText=name;

preview.appendChild(div);

});

alert(
`${names.length}
usuarios únicos detectados`
);

}
);
