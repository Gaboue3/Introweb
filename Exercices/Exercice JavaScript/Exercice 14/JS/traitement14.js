function btnCalculer_onclick()
{ 
 	var Nbre1,Nbre2,Operateur,result;
 	Nbre1=parseInt(document.getElementById("txtNbre1").value);
    Nbre2=parseInt(document.getElementById("txtNbre2").value);
    Operateur=document.getElementById("txtOperateur").value;
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
document.getElementById("lblMessage").innerHTML="Le resultat est : "+result;
}