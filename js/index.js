function registrar(){
    var boton = document.getElementById("iniciarSesion");
    document.getElementById("iniciaraSesion").innerHTML = "Registrado...";
    var nuevoElemento = document.createElement("p");
    var nuevoHijo = document.createTextNode("Contenido que le colocare");
    nuevoElemento.appendChild(nuevoHijo);
    document.body.appendChild(nuevoElemento);
}