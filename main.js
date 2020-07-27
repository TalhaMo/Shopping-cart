
//declaration des variavle globale:;
//les Bouttons Add item:
var bouttons=document.querySelectorAll('.btn');

//les prix de chaque item
var prix=document.querySelectorAll(".prix");

//le non de chaque item
var piece=document.querySelectorAll(".titre");

// la Boite de Carte shopping
var carte=document.querySelector(".calcul");

// Span ou en affiche le prix totale final
var prixFinal=document.getElementById("final");


//la partie entier de la prix de chaque item (sans dt) exp 90dt ==> 90
var prixPiece=0;

//le nom de chaque item 
var titrePiece="";

// balayer la liste  de boutons Add item
for (var i=0;i<bouttons.length;i++){
	//a chaque bouton on ajoute un Event click
    bouttons[i].addEventListener("click",aff);

    function aff(){
		//prend les tous les elements enfants de <div class="image bg-warning">
		var enfants=this.parentElement.parentElement.children;
		//nex est l'element que vien juste après le bouton 
		var nex=this.nextElementSibling;
			nex.style.color="red";
		//annimer le coeur 
        var in1=setInterval(f,1000);
        var in2=setInterval(g,2000);
	//font awesome donne le sous class fa-3x pour agrandir 3 fois le coeur
		function f(){
	nex.className="fas fa-heart fa-3x";
	nex.style.transform="translateY(-8px)";
 
}
	//font awesome donne le sous class fa-2x pour agrandir 2fois le coeur (donc il va se deminier)
    function g(){
	nex.className="fas fa-heart fa-2x";
	nex.style.transform="translateY(4px)";
}
		//just un appel
		in1;
		in2;
	
	//le titre et le prix à chaque clcick
		titrePiece=(enfants[1].textContent);
		prixPiece=parseInt(enfants[2].textContent);
	
		//creation de paragraphe pour la shopping cart
		var p=document.createElement("p");
			p.className="para";
			p.textContent=titrePiece;
		//creation un span pour le prix 
		var s1=document.createElement("span");
			s1.className="prixUni";
			s1.textContent=prixPiece;
			p.appendChild(s1);
		//create 
		var inp=document.createElement("input");
			inp.setAttribute("type","Number");
			inp.setAttribute("class","Number");
			inp.setAttribute("value","1");
			inp.setAttribute("min","0");
			inp.setAttribute("max","100");
			inp.style.width="50px";
			p.appendChild(inp);
		// ajouter p au carte shopping totale
		carte.appendChild(p);
		// on obtient maintenant le prix final est on l'affiche dans le span de id final
		prixFinal.innerHTML=Number(prixFinal.innerHTML)+Number(prixPiece*inp.value);

		//ajouter un evenement change pour les input
		inp.addEventListener("change",ad);
		function ad(){
			//parcourir toujours la Happy shopping Cart
			var tPrix=document.querySelectorAll(".prixUni");
			var tinput=document.querySelectorAll(".Number");
			var tout=0;
			for(var i=0;i<tPrix.length;i++){
				if((tinput[i].value<0) || (tinput[i].value>100)){alert("Invalid number");alert("Please choose number between 1 and 100")}
				else {tout+=Number(tPrix[i].textContent)*Number(tinput[i].value)
				}
			}

			prixFinal.innerHTML=tout;
		}

	}
}

//changer le bouton Add item par le bouton Taken
for (var i=0;i<bouttons.length;i++){

bouttons[i].addEventListener("click",sup);
bouttons[i].style.cursor="grab";

function sup(){
var novBtn=document.createElement("button");
novBtn.setAttribute("class","btn btn-danger");
novBtn.innerHTML="Taken";
novBtn.disabled=true;

var f=this.parentElement.firstElementChild;
var l=this.parentElement.lastElementChild;
this.parentElement.insertBefore(novBtn,l)
f.remove();
}
}
