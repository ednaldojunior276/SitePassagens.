
function Calcular(){

    let original = document.getElementById("origem").value;
    let destino =  document.getElementById("destino").value; 
    let quant = document.getElementById("quantidade");
    let hrs = document.getElementById("horario");
    let res = document.getElementById("res");
    let horario = Number(hrs.value);
    let quantidade = Number(quant.value);
    

    if(original.length == " " && destino.length == " " && horario <= 0 && quantidade <= 0 ){
        alert("PREENCHA OS CAMPOS");
    }
    else if (original.length == " "){
        alert("PREENCHA O CAMPO ORIGEM");
    }
    else if(destino.length == " "){
        alert("PREENCHA O CAMPO DESTNO");
    }
    else if (horario == " "){
        alert("PREENCHA O CAMPO HORÁRIO");

    }
    else if (quantidade == " "){
        alert("PREENCHA O CAMPO QUANTIDADE");

    }
    else{

    

    switch(original, destino){
        case "recife":
        case "salvador":
            res.innerHTML = " ";
                if(horario >= 08.00 && horario <= 12.59 ){
                        let k = ((804 * 0.55)*quantidade + 52).toFixed(2);
                        res.innerHTML = `PREÇO DA PASSAGEM  RECIFE X SALVADOR É DE ${k} R$ PARA ${quantidade} PESSOAS`;
                        document.body.style.background = "gold";
                        
                    }
                else if(horario >= 12.59 && horario <= 17.59 ){
                        let k = ((804 * 0.55)*quantidade + 55).toFixed(2);
                        res.innerHTML = `PREÇO DA PASSAGEM RECIFE X SALVADOR É DE ${k} R$ PARA ${quantidade} PESSOAS`;
                        document.body.style.background = "orange";
                    }
                
                else if(horario >= 17.59 && horario <= 23.59 ){
                        let k = ((804 * 0.55)*quantidade + 58).toFixed(2);
                        res.innerHTML = `PREÇO DA PASSAGEM RECIFE X SALVADOR É DE ${k} R$ PARA ${quantidade} PESSOAS`;
                        document.body.style.background = "black";
                    }
               else if(horario > 23.59){
                    alert("NÃO TEM PASSAGEM PARA MADRUGADA");
               }
               break;
    
        case "são paulo":
        case "rio de janeiro":
   
            if(horario >=13.00 && horario <= 17.59){
                let k1 = ((357 * 0.55)*quantidade + 55).toFixed(2);
                res.innerHTML = `PREÇO DA PASSAGEM ${k1}R$`;
                break;
            }
        
        case "gramado":
        case "espirito santos":
            let k2 = (1230 * 0.55).toFixed(2);
            res.innerHTML = `PREÇO DA PASSAGEM ${k2}`;
            break;

        default:
            res.innerHTML = `CIDADE OU ESTADO NÃO CADASTRADO`;
            break;
                }
    
        }
}
function Apagar(){
    let res = document.getElementById("res");
    res.innerHTML = "AGUARDANDO RESPOSTA... ";
    
}




    
