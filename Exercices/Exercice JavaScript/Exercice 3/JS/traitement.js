function btnCalculer_onclick()
{
    var ArgentCan, TauxChange, Euro;
    ArgentCan=parseFloat(document.getElementById("txtargent").value);
    TauxChange=parseFloat(document.getElementById("txtTauxEuro").value);
    Euro=ArgentCan*TauxChange;
    console.log("L'argent est de "+Euro);
}