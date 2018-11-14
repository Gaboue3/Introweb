function btnCalculer_onclick()
{
var prixBase,ageSaisi,coutFinale, film,temps;

prixBase=parseFloat(document.getElementById("txtBasePrix").value);
ageSaisi=parseInt(document.getElementById("txtAge").value);
film=document.getElementById("lstOptions").value;
if(document.getElementById("radMidi").checked==true)
{
    temps="midi";
}
else
{
    temps="soir";
}


if(document.getElementById("chkMiSession").checked==true)
{
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
}
else
{
    coutFinale=prixBase;
}

document.getElementById("lblMessage").innerHTML="Un billet du "+temps+" pour un spectateur de "+ageSaisi+" ans coute $"+ coutFinale+" pour le film "+film;
}

function chgLstFilm_onchange()
{
        var film;
    film=document.getElementById("lstOptions").value;

    document.getElementById("imgAFficher").src="img/"+film+".jpg";

}