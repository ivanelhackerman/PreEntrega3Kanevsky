function crearCuenta() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const peso = parseInt(document.getElementById("peso").value);
    const objetivo = document.getElementById("objetivo").value;

    localStorage.setItem("email", email);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("peso", peso);
    localStorage.setItem("objetivo", objetivo);

    alert("¡Cuenta creada exitosamente!");
}

function buscarRecetas() {

    const recetas = ["Ensalada de quinoa", "Batido verde"];
    
    alert("Recetas encontradas:\n" + recetas.join("\n"));
}

function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("pesoIMC").value);

    const imc = peso / (altura * altura);

    alert("Tu Índice de Masa Corporal (IMC) es: " + imc.toFixed(2));
}

function guardarHabitos() {
    const agua = parseInt(document.getElementById("agua").value);
    const sueno = parseInt(document.getElementById("sueno").value);
    const actividad = parseInt(document.getElementById("actividad").value);

    const registroHabitos = {
        fecha: new Date().toLocaleDateString(),
        agua: agua,
        sueno: sueno,
        actividad: actividad
    };

    let registrosAnteriores = JSON.parse(localStorage.getItem("registrosHabitos")) || [];
    
    registrosAnteriores.push(registroHabitos)
}