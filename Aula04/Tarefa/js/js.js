function somar(params) {
    var tn1 = window.document.getElementById('txtn1');
    let tn2 = window.document.querySelector('input#txtn2');
    var res = window.document.getElementById('res');

    //AS 2 maneiras de Number, d~áo o mesmo 
    
     var n1 = Number.parseInt(tn1.value);
     var n2 = Number(tn2.value);
     if(n1!=0 && n2!=0 ){
         var s = n1 + n2 ;
         res.innerText = ` A soma entre ${n1} + ${n2} é igual a ${s}`;
        }else{
         res.innerText ="Preencha todos os campos";
        }     
}