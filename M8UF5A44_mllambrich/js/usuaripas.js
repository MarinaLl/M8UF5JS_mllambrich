function validarUsuari(){
    var usuari = document.getElementById('username').value;
    var passw1 = document.getElementById('passw1').value;
    var passw2 = document.getElementById('passw2').value; 
    if(usuari == "Ibai"){
        if(passw1 == 1234 && passw2 == 1234){
            alert('correcte');
        }
        else{
            alert('incorrecte');
        }
    }else{
        alert('incorrecte');
    }
}