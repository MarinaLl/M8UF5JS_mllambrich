function calcula(n){
    document.getElementById("textfield").value += n;
}
function resultado(){
    var operacion = document.getElementById('textfield').value;
    var resultat = eval(operacion);
    document.getElementById('textfield').value = resultat
}
function reset(){
    document.getElementById('textfield').value = " ";
}
