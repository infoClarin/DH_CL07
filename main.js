var string = "Veamos cómo se usa Git, parece bastante fácil...";
var str = string.split("");
var el = document.getElementById('str');
(function animate(){
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate, 90);
})();