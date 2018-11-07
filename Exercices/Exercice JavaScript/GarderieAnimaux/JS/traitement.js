var  lstNom, lstJpour,CoutSupp,cout,race,couttot,affiche;
function btnCalculer_onclick()
{ 


 	lstNom=document.getElementById("lstVeterinaire").value;
 	lstJpour=parseInt(document.getElementById("txtNbreJours").value);
    verifierRace();
    couttot=lstJpour*cout+CoutSupp;
   document.getElementById("lblMessage").innerHTML=("Le vétérinaire responsable est "+lstNom+". Le montant de garde pour votre "+ race+" est de "+ couttot+" pour "+lstJpour+"jours "+affiche+".");
}
function verifierRace()
{
    if(document.getElementById("chkServ").checked==true)
    {
        CoutSupp=5;
        affiche="avec service de toilettage"
    }
    else
    {
        CoutSupp=0;
        affiche="sans service de toilettage"
    }
    if(document.getElementById("radChien").checked==true)
    {
        race="chien";
        cout=18.50;
    }
    else
    {
        race="chat";
        cout=16.95;
    }
}