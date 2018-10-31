function btnCalculer_onclick() {

    var nbSous, nbCinqSous, nbDixSous, nbQuarter, Total;

    nbSous=parseInt(document.getElementById("txtsous").value);
    nbCinqSous=parseInt(document.getElementById("txtcinqsous").value);
    nbDixSous=parseInt(document.getElementById("txtdixsous").value);
    nbQuarter=parseInt(document.getElementById("txtquarter").value);

    Total=parseFloat(nbSous*0.01+nbCinqSous*0.05+nbDixSous*0.1+nbQuarter*0.25);
    console.log(Total);
}