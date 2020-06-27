 var exp = '', number, decimal, equal,operator, allowSR =
 var textview = document.forms['myForm']['textview'];

 function insertNum(num){
     if(equal){
         exp = num;
         textview.value = exp;
         number = true;
         equal = false;
     }
     else{
         exp = textview.value + num;
         textview.value = exp;
         number = true;
     }
     if (operator) decimal = false;
     //SR('a');
 }

 function insertOp(op){
     textview.value = exp + op;
     operator = true;
     equal = false;
     allowSR = false;
     //SR('a');
 }

 function insertDec(){
     if (number && )
 }