function btnCalculer_onclick()
{
var prixBase,ageSaisi,coutFinale;

prixBase=parseFloat(document.getElementById("txtBasePrix").value);
ageSaisi=parseInt(document.getElementById("txtAge").value);

if (ageSaisi<=16)
{
    if(document.getElementById("radMidi").checked==true)
    {
        coutFinale=prixBase-(prixBase*60/100);
    }
    else
    {
        coutFinale=prixBase-(prixBase*40/100);
    }
}
else
{
    if(document.getElementById("radMidi").checked==true)
        {
            coutFinale=prixBase-(prixBase*30/100);
        }
    else
        {
            coutFinale=prixBase;
        }
}
console.log("Le cout du billet sera de: "+ coutFinale);
}