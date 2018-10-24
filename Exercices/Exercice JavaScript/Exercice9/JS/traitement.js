function btnCalculer_onclick()
{ 
 	var nbAdulte, nbEnfant, nbEtu, nbVieux, Prix, Total;

 	nbEtu=parseInt(document.getElementById("Etudiant").value);
    nbVieux=parseInt(document.getElementById("Vieux").value);
    nbAdulte=parseInt(document.getElementById("Adulte").value);
 	Prix= parseFloat((nbAdulte*20)  + (nbEtu*12) + (nbVieux*15) );
    if (nbVieux+nbAdulte+nbEtu>=5)
    {
        Prix= Prix-(Prix/10) ;
    }
    console.log("Le prix est de "+Prix);
}
