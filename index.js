//alert("hi");
function func(){
    var randomnumber1=Math.floor(Math.random()*6)+1;
    var randomnumber2=Math.floor(Math.random()*6)+1;

    var diceimg1="images/dice"+randomnumber1+".png";
    var randimg1=document.querySelector(".img1").setAttribute("src",diceimg1);

    var diceimg2="images/dice"+randomnumber2+".png";
    var randimg2=document.querySelector(".img2").setAttribute("src",diceimg2);

    if(randomnumber1>randomnumber2){
        document.querySelector("h1").innerHTML="Player 1 wins the match";
    }
    else if(randomnumber1<randomnumber2){
        document.querySelector("h1").innerHTML="Player 2 wins the match";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!!!";
    }   
}