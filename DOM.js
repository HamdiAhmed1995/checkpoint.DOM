function incrementation1(){
    var el=document.getElementById("id1");
    value=el.innerHTML;
    ++value;
    document.getElementById("id1").innerHTML=value;

    var elem=document.getElementById("idd1");
    value1=elem.innerHTML;
var add= parseFloat(value1)+2.15;
document.getElementById("idd1").innerHTML=parseFloat(add).toFixed(2);



    }



function decrementation1(){
    var el=document.getElementById("id1");
    value=el.innerHTML;
    if(value>1){
    --value;}
    else{ 
    value=1;
    alert("You must set at least one quantity");}

    document.getElementById("id1").innerHTML=value;



    var elem=document.getElementById("idd1");
    value1=elem.innerHTML;
    var sub=parseFloat(value1)-2.15;
    if(sub<2.15){
    sub=2.15;}
    document.getElementById("idd1").innerHTML=parseFloat(sub).toFixed(2);

}

function incrementation2(){
    var el=document.getElementById("id2");
    valuee=el.innerHTML;
    ++valuee;
    document.getElementById("id2").innerHTML=valuee;

    var elem=document.getElementById("idd2");
    valuee1=elem.innerHTML;
var add= parseFloat(valuee1)+3.19;
document.getElementById("idd2").innerHTML=parseFloat(add).toFixed(2);


}
function decrementation2(){
    var el=document.getElementById("id2");
    valueee=el.innerHTML;
    if(valueee>1){
    --valueee;}
    else{ 
    valueee=1;
    alert("You must set at least one quantity");}

    document.getElementById("id2").innerHTML=valueee;



    var elem=document.getElementById("idd2");
    valueee1=elem.innerHTML;
    var sub=parseFloat(valueee1)-3.19;
    if(sub<3.19){
    sub=3.19;}
    document.getElementById("idd2").innerHTML=parseFloat(sub).toFixed(2);
}




function check() {
    //total price of items
    var nombre1 = document.getElementById("idd1");
    numb1=nombre1.innerHTML;
    var nombre2 =document.getElementById("idd2");
    numb2=nombre2.innerHTML;
    var resultat = parseFloat(numb1)+parseFloat(numb2);
    document.getElementById("idd3").innerHTML = resultat.toFixed(2);

//total number of items

    var nombre0 = document.getElementById("id1");
    numb0=nombre0.innerHTML;
    var nombre00 =document.getElementById("id2");
    numb00=nombre00.innerHTML;
    var resultat0 = parseFloat(numb0)+parseFloat(numb00);
    document.getElementById("id3").innerHTML = resultat0;
    
}
function remove(){

    var parent = document.getElementById("parent");
    var enfant1 = parent.querySelector(".Cart-Items");
    var enfant2 = parent.querySelector(".Cart-Items.pad");
    parent.removeChild(enfant2);
    parent.removeChild(enfant1);
    var x=document.getElementById("idd3");
    var total=x.innerHTML;
    total=0;
    document.getElementById("idd3").innerHTML=parseFloat(total).toFixed(2);

    var y=document.getElementById("id3");
    var total1=y.innerHTML;
    total1=0;
    document.getElementById("id3").innerHTML=parseFloat(total1);
    

}
function remove1(){
    var parent = document.getElementById("parent");
    var enfant1 = parent.querySelector(".Cart-Items");

    parent.removeChild(enfant1);
    valu=document.getElementById("idd2");
    el=valu.innerHTML;
    document.getElementById("idd3").innerHTML=parseFloat(el).toFixed(2);
    valu1=document.getElementById("id2");
    el1=valu1.innerHTML;
    document.getElementById("id3").innerHTML=parseFloat(el1);

}
function remove2(){
    var parent = document.getElementById("parent");
    var enfant2 = parent.querySelector(".Cart-Items.pad");
    parent.removeChild(enfant2);

    valu=document.getElementById("idd1");
    el=valu.innerHTML;
    document.getElementById("idd3").innerHTML=parseFloat(el).toFixed(2);

    valu1=document.getElementById("id1");
    el1=valu1.innerHTML;
    document.getElementById("id3").innerHTML=parseFloat(el1);

}
function saved1(){


const nomUtilisateur = prompt("username :");

if (nomUtilisateur !== null) {
    alert("Hello, " + nomUtilisateur +","+ " " +"APPLE JUICE is saved for you !");
} 
else {
    alert("you refuse add your name.");
}
}
function saved2(){


    const nomUtilisateur = prompt("username :");
    
    if (nomUtilisateur !== null) { 
        alert("Hello, " + nomUtilisateur +","+ " " +"GRAPES JUICE is saved for you !");
    } 
    else {
        alert("you refuse add your name.");    
    }
    }