const titulo = document.getElementById("textSupport")

class Cliente  {
    constructor (nombre,email,mensaje){
    this.nombre = nombre;
    this.email = email;
    this.consulta = mensaje;
}
}

const arrayClientes = [];
const formulario = document.getElementById ("formulario")

formulario.addEventListener ("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById ("nombre");
    const email = document.getElementById ("email");
    const mensaje = document.getElementById ("mensaje");
    console.log("El nombre ingresado es: " + nombre.value);
   
    console.log("El email ingresado es: " + email.value);
    console.log("La observacion ingresada es: " + mensaje.value);

const cliente = new Cliente (nombre.value,email.value,mensaje.value);
arrayClientes.push(cliente);
console.log(arrayClientes);
    formulario.reset();
})