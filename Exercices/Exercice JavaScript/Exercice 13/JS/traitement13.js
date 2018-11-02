function btnCalculer_onclick()
{ 
 	var Nbre1,jourSemaine;
 	Nbre1=parseInt(document.getElementById("txtNumSem").value)
    switch (Nbre1)
    {
        case 1:
            jourSemaine="Lundi";
            break;
        case 2:
            jourSemaine="Mardi";
            break;
        case 3:
            jourSemaine="Mercredi";
            break;
        case 4:
            jourSemaine="Jeudi";
            break;
        case 5:
            jourSemaine="Vendredi";
            break;
        case 6:
            jourSemaine="Samedi";
            break;
        case 7:
            jourSemaine="Dimanche";
            break;

    }
    document.getElementById("lblMessage").innerHTML="Le jour de la semaine est: "+jourSemaine;

}