var tabNom,tabScore,res,i,nom,score,cptJoueur;
tabNom=new Array(" "," "," "," ");
tabScore=new Array(0,0,0,0);
cptJoueur=0;

function btnAjouter_onclick()
{

    nom=document.getElementById("txtNom").value;
    score=parseInt(document.getElementById("txtPoints").value);
    tabNom[cptJoueur] = nom;
    tabScore[cptJoueur] = score;
    document.getElementById("lblReponse").innerHTML=tabNom+" "+tabScore;
    debloquerBoutons();
    switch (cptJoueur)
    {
        case 0:document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur 1";break;
        case 1:document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur 2";break;
        case 2:document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur 3";break;
        case 3:document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur 4";break;

    }
    cptJoueur++;
}

function debloquerBoutons() {
    if (cptJoueur == 3) {
        document.getElementById("btnRechercher").disabled = false;
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
        document.getElementById("btnAjouter").disabled = true;
       }
}
function btnMoy_onclick()
{
  alert("He ho")
}


