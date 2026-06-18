const today = new Date();

document.getElementById("updateDate").innerHTML =
"Actualizado al: " +
today.toLocaleDateString("es-ES");
