function validacion(){
    var x = document.getElementById('passw1');
    var y = document.getElementById('passw2');
    if(x.value == y.value){
        alert("validació correcte");
    }else{
        alert("validació incorrecte");
    }
}