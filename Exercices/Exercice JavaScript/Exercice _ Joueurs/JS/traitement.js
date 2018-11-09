var tabNom,tabScore,res,nom,score,cptJoueur;
tabNom=new Array(" "," "," "," ");
tabScore=new Array(0,0,0,0);
cptJoueur=0;

function btnAjouter_onclick()
{

    nom=document.getElementById("txtNom").value;
    score=parseFloat(document.getElementById("txtPoints").value);
    tabNom[cptJoueur] = nom;
    tabScore[cptJoueur] = score;
    debloquerBoutons();
    switch (cptJoueur)
    {
        case 0:document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur 2";break;
        case 1:document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur 3";break;
        case 2:document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur 4";break;
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
    var moy,i;
    moy=0;
  for(i=0;i<4;i++)
  {
      moy+=tabScore[i]/4;
  }
      document.getElementById("lblReponse").innerHTML="La moyenne est de "+moy;
}
function btnMeilleur_onclick()
{
    res=0;
    var i,nomJ;
    for(i=0;i<4;i++)
    {
        if(tabScore[i]>res)
        {
            res=tabScore[i];
            nomJ=tabNom[i];
        }
    }
    document.getElementById("lblReponse").innerHTML="Le plus grand nombre est "+res+" accomplie par "+nomJ;
}

function btnPire_onclick()
{
    res=99999999999999999;
    var i,nomJ;
    for(i=0;i<4;i++)
    {
        if(tabScore[i]<res)
        {
            res=tabScore[i];
            nomJ=tabNom[i];
        }
    }
    document.getElementById("lblReponse").innerHTML="Le plus petit nombre est "+res+" accomplie par "+nomJ;

}
function btnRechercher_onclick()
{
    var trouve,nomSaisi,resu,nomRes,i;
    nomSaisi=document.getElementById("txtNom").value;
    i=0;
    trouve=false;
    while(trouve==false&&i<4)
    {
        if(nomSaisi==tabNom[i])
        {
            resu=tabScore[i];
            nomRes=tabNom[i];
            trouve=true;
        }
        else
        {
            i++;
        }
    }
    if(trouve==true)
    {
        document.getElementById("lblReponse").innerHTML="Le score de "+nomRes+" est de "+resu;
    }
    else
    {
        document.getElementById("lblReponse").innerHTML="Le nom n'existe pas";
    }
}