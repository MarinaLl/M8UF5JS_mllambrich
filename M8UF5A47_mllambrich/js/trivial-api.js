// VALIDACIÓ DELS USUARIS
function registre(){
    var nomUsuari = document.getElementById('nom').value;
    var cognomUsuari = document.getElementById('cognom').value;
    var majorEdat = document.getElementById('major-edat');
    
    // DADES EMMAGATZEMADES
    var usuariRegistrat = localStorage.getItem("nom-usuari");
    var cognomRegistrat = localStorage.getItem("cognom-usuari");
    var majorEdatRegistrat = localStorage.getItem("check");

    if(usuariRegistrat == nomUsuari && cognomRegistrat == cognomUsuari &&majorEdatRegistrat){
        window.open('web/trivial.htm');
    }else{
        localStorage.setItem("nom-usuari", nomUsuari);
        localStorage.setItem("cognom-usuari", cognomUsuari);
        
        if(majorEdat.checked==true){
            localStorage.setItem("check", majorEdat.checked);
        }else{
            alert("Has de ser major d'edat per poder accedir-hi");
        }
    }
}

//  var resposta1 = document.getElementById('res-1');
//  var resposta2 = document.getElementById('res-2');
//  var resposta3 = document.getElementById('res-3');
//  var resposta4 = document.getElementById('res-4');
//  var resposta5 = document.getElementById('res-5');


//  localStorage.setItem("pregunta-1", resposta1.checked);
//  localStorage.setItem("pregunta-2", resposta2.checked);
//  localStorage.setItem("pregunta-3", resposta3.checked);
//  localStorage.setItem("pregunta-4", resposta4.checked);
//  localStorage.setItem("pregunta-5", resposta5.checked);



function pregunta1(){
    //var solucio1 = localStorage.getItem("pregunta-1");
    var comprova = resposta1.checked;

    if(comprova){
        document.getElementById('check').innerHTML="Resposta correcta!"
    }else{
        document.getElementById('check').innerHTML="Resposta icorrecta!"
    }
}
function pregunta2(){
    //var solucio1 = localStorage.getItem("pregunta-1");
    var comprova = resposta2.checked;

    if(comprova){
        document.getElementById('check-1').innerHTML="Resposta correcta!"
    }else{
        document.getElementById('check-1').innerHTML="Resposta icorrecta!"
    }
}
function pregunta3(){
    //var solucio1 = localStorage.getItem("pregunta-1");
    var comprova = resposta3.checked;

    if(comprova){
        document.getElementById('check-2').innerHTML="Resposta correcta!"
    }else{
        document.getElementById('check-2').innerHTML="Resposta icorrecta!"
    }
}
function pregunta4(){
    //var solucio1 = localStorage.getItem("pregunta-1");
    var comprova = resposta4.checked;

    if(comprova){
        document.getElementById('check-3').innerHTML="Resposta correcta!"
    }else{
        document.getElementById('check-3').innerHTML="Resposta icorrecta!"
    }
}
function pregunta5(){
    //var solucio1 = localStorage.getItem("pregunta-1");
    var comprova = resposta5.checked;

    if(comprova){
        document.getElementById('check-4').innerHTML="Resposta correcta!"
    }else{
        document.getElementById('check-4').innerHTML="Resposta icorrecta!"
    }
}



var contingut = document.querySelector('#contingut');

function agafar() { 
    fetch('https://randomuser.me/api/') 
        .then(res => res.json()) 
        .then(data => { 
        console.log(data.results['0']) 
        contingut.innerHTML = ` 
        <img src="${data.results['0'].picture.large}" 
        width="100px" class="img-fluid rounded-circle"> 
        <p>Nom: ${data.results['0'].name.last}</p> 
        ` 
        }) 
}
window.onload = agafar