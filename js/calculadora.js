function calculadora(op){
    var valor1, valor2,result
    valor1 = document.getElementById
    ("idN1");
    valor2 = document.getElementById
    ("idN2");
    //soma
    if(op == "+"){
        result = parseFloat(valor1.value)+
        parseFloat(valor2.value);
    }
    document.getElementById("idResposta").
        innerHTML = result;

    //subtração
    if(op =="-"){
        result = parseFloat(valor1.value)-
        parseFloat(valor2.value);
    }
    document.getElementById("idResposta").
        innerHTML = result;

    //multiplicação
    if(op == "*"){
        result = parseFloat(valor1.value)*
        parseFloat(valor2.value);
    }
    document.getElementById("idResposta").
        innerHTML = result;

    //divisão
    if(op == "/"){
        result = parseFloat(valor1.value)/
        parseFloat(valor2.value);
    }
    document.getElementById("idResposta").
        innerHTML = result;
}