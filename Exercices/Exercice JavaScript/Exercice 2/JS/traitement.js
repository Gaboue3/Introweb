function btnCalculer_onclick()
{ 
 var MoyKmMois, TotKm;
 MoyKmMois=parseInt(document.getElementById("txtKilometre").value);
    TotKm=MoyKmMois*60;
    console.log("Votre total parcouru dans les 5 prochaines annees est de "+TotKm);
}