var lstNom, NbreJour, CoutSupp, cout, race, couttot, affiche, tauxHoraire, nbreHeures, vet, somme;
function btnCalculer_onclick() {



    lstNom = document.getElementById("lstVeterinaire").value;
    NbreJour = parseInt(document.getElementById("txtNbreJours").value);
    nbreHeures = parseInt(document.getElementById("txtNbreHeures").value);
    verifierToilettage();
    verifierRace();
    calculerRabais();
    calculerSalaireToutBib();
    vet = tauxHoraire * nbreHeures;
    afficherLesTrucs();


}
function radImg1_onclick()
{
        document.getElementById("imgAFficher").src = "IMG2/ea64f5ed1ed33f0bf5e2b6e96e1f242c.jpg";
}

function radImg2_onclick()
{
   document.getElementById("imgAFficher").src = "IMG2/f1bc1af0f69f7444708efac43451fb22--a-minion-super-heros.jpg";
}
function radImg3_onclick()
{
    document.getElementById("imgAFficher").src = "IMG2/IMG2.jpg";
}
function verifierToilettage()
{
    if (document.getElementById("chkServ").checked == true) {
        CoutSupp = 5;
        affiche = "avec toilettage"
    }
    else {
        CoutSupp = 0;
        affiche = "sans toilettage"
    }
}
function verifierRace()
{
    if (document.getElementById("radChien").checked == true) {
        race = "chien";
        cout = 18.50;
    }
    else {
        race = "chat";
        cout = 16.95;
    }
}
function calculerRabais()
{
    if (NbreJour > 1 && NbreJour <= 5) {
        couttot = (NbreJour * cout + CoutSupp);
    }
    else if (NbreJour > 5 && NbreJour <= 10) {
        couttot = (NbreJour * cout + CoutSupp) * 0.95;
    }
    else if (NbreJour > 10 && NbreJour <= 30) {
        couttot = (NbreJour * cout + CoutSupp) * 0.9;
    }
    else {
        couttot = (NbreJour * cout + CoutSupp) * 0.85;
    }
}
function calculerSalaireToutBib()
{
    switch (lstNom)
    {
        case "Audrey Bouchard":
            tauxHoraire = 25;
            break;
        case "Stéphane Tremblay":
            tauxHoraire = 40;
            break;
        case "Maxime Simard":
            tauxHoraire = 35;
            break;
        case"Mélissa Caron":
            tauxHoraire = 45;
            break;
    }
}
function afficherLesTrucs()
{
    document.getElementById("lblMessage").innerHTML = " Le montant de garde pour votre " + race + " est de " + couttot.toFixed(2) + " pour " + NbreJour + " jours " + affiche + ".";
    document.getElementById("lblMessage2").innerHTML = "Le vétérinaire responsable est " + lstNom + ". Le cout du veterinaire est de: " + vet + "$.";
    somme = couttot + vet;
    document.getElementById("lblMessage3").innerHTML = "Le cout total est de: " + somme.toFixed(2);
}

