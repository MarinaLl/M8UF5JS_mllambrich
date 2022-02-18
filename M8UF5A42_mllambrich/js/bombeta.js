/*function canviImatge() {
  document.getElementsByTagName("img").src="img/llumon.gif";
}

document.addEventListener("mouseover", canviImatge);

document.addEventListener("mouseover", function(){
  alert(this.firstChild);
  this.src="img/llumon.gif";
    
});
var canviImatge = document.getElementsByTagName("img");
canviImatge.addEventListener("mouseover", function(){canviImatge.src="img/llumon.gif"});*/


/*window.addEventListener("resize", function(){
    document..getElementById("demo").innerHTML = "caca de la vaca";
  });


var item = document.getElementById("button");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{  // not needed since item is already global, 
   // I am assuming this is here just because it's sample code?
   // var item = document.getElementById("button"); 
   item.setAttribute("style", "background-color:blue;")
}

function func1()
{  
   item.setAttribute("style", "background-color:green;")
}*/

document.onmouseover = captura_click;
document.onclick = click;
	
function captura_click(e) {
	// Funcion para capturar el click del raton
	var HaHechoClick = e.target;
	if (e == null) {
		// Si hace click en un elemento, lo leemos
		//HaHechoClick = e.srcElement;
	} else {
		// Si ha hecho click sobre un destino, lo leemos
		//HaHechoClick = e.target;
        // alert(HaHechoClick.getAttribute("src"))
        if (HaHechoClick.src == "file:///media/smx2b/KINGSTON/M08/M08UF5_mllambrich/M8UF5JS_mllambrich/M8UF5A42_mllambrich/img/llumon.gif") {
            HaHechoClick.src="img/llumoff.gif"
        } else {
            HaHechoClick.src="img/llumon.gif"
        }

	}
    //document.getElementById(HaHechoClick.id).src ="img/llumbreak.gif";
}
function click(e){
  var hacerclick = e.target;
  if(e == null){

  }else{
    if(hacerclick.src == "img/llumbreak.gif"){
      hacerclick.src="img/llumoff.gif";
    }else{
      hacerclick.src="img/llumbreak.gif";
    }
  }
}