var string = "Veamos cómo se usa Git, parece bastante fácil...";
// Qué hacemos con tu nueva variable?:) 
//El código anda de vuelta, si lo mirás en la web en https://infoclarin.github.io/DH_CL07/
var nuevoString = " Modificanción del Archivo main.js";
var str = string.split("");
var este = document.getElementById('str');
(function animate() {
    str.length > 0 ? este.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate, 90);
})();