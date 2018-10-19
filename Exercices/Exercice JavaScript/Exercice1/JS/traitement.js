function btnCalculer_onclick()
{ 
 	var  PoidsLivre, Kg;
    PoidsLivre=parseInt(document.getElementById("txtPoids").value);
    Kg = PoidsLivre/2.2
        console.log("Le poids en Kilogramme est"+Kg);

}