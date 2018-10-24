function btnCalculer_onclick()
{
    var Destination, Distance, ConsoVoiture, PrixLitre , Cout;
    Destination=document.getElementById("txtdestination").value;
    Distance=parseFloat(document.getElementById("txtdistance").value);
    ConsoVoiture=parseInt(document.getElementById("txtconso").value);
    PrixLitre=parseFloat(document.getElementById("txtprix").value);
    Cout=Distance*ConsoVoiture/100*PrixLitre;
    console.log("Pour aller a "+Destination+" il en coutera: "+Cout.toFixed(2));
}