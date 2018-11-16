function btnCalculer_onclick()
{
    if(validerChampsObligatoire()===true)
    {
        saisir();
    }

}
function validerChampsObligatoire()
{
    valide=false;
    if(valideExiste("txtNbre1")===true && valideExiste("txtNbre2")===true && valideExiste("txtOperateur")===true)
    {
        valide=true;
    }
    return valide;
}
function valideExiste(idInput)
{
    valide=false;
    if(document.getElementById(idInput).value==="")
    {
        document.getElementById(idInput).style.backgroundColor = "red";
    }
    else
    {
        valide=true;
        document.getElementById(idInput).style.backgroundColor = "white";
    }
    return valide;
}
function saisir()
{
    var result;
    var Nbre1,Nbre2,Operateur,result;
    Nbre1=parseInt(document.getElementById("txtNbre1").value);
    Nbre2=parseInt(document.getElementById("txtNbre2").value);
    Operateur=document.getElementById("txtOperateur").value;
    result=calculer(Nbre1,Nbre2,Operateur);
    document.getElementById("lblMessage").innerHTML="Le resultat est : "+result;
}
function calculer(Nbre1,Nbre2,Operateur)
{
    var result;
    switch (Operateur)
    {
        case "+":
            result=Nbre1+Nbre2;
            break;
        case "-":
            result=Nbre1-Nbre2;
            break;
        case "*":
            result=Nbre1*Nbre2;
            break;
        case "/":
            result=Nbre1/Nbre2;
            break;
    }
    return result
}