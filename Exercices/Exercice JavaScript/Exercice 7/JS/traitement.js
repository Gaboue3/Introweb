function btnCalculer_onclick() {

    var nbEtu, nbHotDogEtu, nbPaquet, surplus ;

    nbEtu=parseInt(document.getElementById("txtEtu").value);
    nbHotDogEtu=parseInt(document.getElementById("txtHotDog").value);
    nbPaquet=Math.ceil((nbEtu*nbHotDogEtu)/12);
    surplus=(nbPaquet*12)-(nbEtu*nbHotDogEtu);
    console.log("Il faudra "+nbPaquet+" paquets et il restera "+surplus+" hot-dogs.");
}