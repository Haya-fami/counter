

function add(){
    var a=document.getElementById("num").innerHTML;
    var b=Number(a)+1;
    document.getElementById("num").innerHTML=b;

}

function sub(){
    var a=document.getElementById("num").innerHTML;
    var b=Number(a)-1;
    document.getElementById("num").innerHTML=b;
}

function reset(){
    document.getElementById("num").innerHTML=0;
}

