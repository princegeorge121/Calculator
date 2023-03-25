let var1 = document.getElementById("element-one").textContent=8;
let var2 = document.getElementById("element-two").textContent=4;

let result=document.getElementById("result-el");

function add(){
    result.textContent=var1+var2;
}

function sub(){
    result.textContent=var1-var2;
}

function mult(){
    result.textContent=var1*var2;
}

function div(){
    result.textContent=var1/var2;
}



