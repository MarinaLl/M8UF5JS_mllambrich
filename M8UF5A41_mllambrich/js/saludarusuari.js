function enviarSalutacio(){
    var nom = document.getElementById("nom").value;
    var cognom = document.getElementById("cognom").value;

    document.getElementById('salutacio').innerHTML = 'HOLA ' + nom + ' ' + cognom + ' GRÀCIES PER OMPLIR EL FORMULARI';
}