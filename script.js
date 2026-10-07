// Tarea 1
function cambiarEstilos(){
    document.getElementById('parrafo').style.fontFamily = "Open Sans, sans-serif";
    document.getElementById('parrafo').style.fontSize = "25px";
    document.getElementById('parrafo').style.color = "red";
}

// Tarea 2

function enviarFormulario(){
    const formulario = document.getElementById('form1');

    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        const nombre = formulario.elements["fname"].value;
        const apellido = formulario.elements["lname"].value;

        console.log("Nombre:", nombre);
        console.log("Apellido:", apellido);
    });
}

enviarFormulario();


// Tarea 3

function mostrarAlert(){
    const boton = document.getElementById("botonEnlaces");

    boton.addEventListener("click", function() {

        const enlaces = document.querySelectorAll("a");

        const totalEnlaces = enlaces.length;
        const primerEnlace = enlaces[0];
        const ultimoEnlace = enlaces[enlaces.length - 1];

        alert(`
            Número total de enlaces: ${totalEnlaces}

            Primer enlace: ${primerEnlace.href}

            Último enlace: ${ultimoEnlace.href}
        `);
    });
}

mostrarAlert();