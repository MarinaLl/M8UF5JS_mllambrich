function validarUsuari(){
    var usuari = document.getElementById('username').value;
    var passw1 = document.getElementById('passw1').value;
    var passw2 = document.getElementById('passw2').value;

    if(usuari){
        // Comprovació de les dades al localstorage
        if(localStorage.getItem('nomusuari')==usuari && localStorage.getItem('password')== passw1){
            alert('Benvingut de nou'+ " " + usuari);
        }else{
            // Validador de password
            if(passw1 == passw2){
                localStorage.setItem('nomusuari', usuari);
                localStorage.setItem('password', passw1);
                alert('datos guardados');
            }else{
                alert('Paràmetre invàlid');
            }
        }
    }else{
        alert('Paràmetre invàlid');
    }
}
function guardar(){
    var cognomUsuari = document.getElementById('cognom').value;
    var nomUsuari = document.getElementById('nom').value;
    // Guarda les dades al localstorage
    localStorage.setItem('nom', nomUsuari);
    localStorage.setItem('cognom', cognomUsuari);

    alert("S'han guardat les dades");
}
function recuperar(){
    var recuperaNom = localStorage.getItem('nom');
    var recuperaCognom = localStorage.getItem('cognom');
    
    // Recuperació de les dades
    document.getElementById('nom').value = recuperaNom;
    document.getElementById('cognom').value = recuperaCognom;
}
function esborrar(){
    localStorage.clear();
    alert("S'han esborrat les dades");
}
