var trickButton1 = document.getElementById("trickButton1");
var trickButton2 = document.getElementById("trickButton2");
var trickButton3 = document.getElementById("trickButton3");
var x = 0;

trickButton1.addEventListener("click" , sweg);
//*this is a function in order to link it to the button*//
function sweg(){
    document.getElementById("trick1").innerHTML=randomword1();

}
/*this here used to target the div box in the html on where to display the word*/
function randomElement(){
    var templ = document.createElement("div");
    templ.innerHTML = randomword1();
    return templ;
}
/*this right here is used for the word randomizing, the words are put in an array and
are linked with eachother*/
function randomword1(){
    var word;
    var words = ["Fakie" , "Nollie" , "Regular" , "Switch"];
    x = Math.floor((Math.random()* words.length));
    word = words[x];
    return word;
    
}
/////////////////////////////*this is for the second button*///////////////////////////////
trickButton2.addEventListener("click" , lmao);
//*this is a function in order to link it to the button*//
function lmao(){
    document.getElementById("trick2").innerHTML =randomword2();

}
/*this here used to target the div box in the html on where to display the word*/
function randomElement(){
    var templ = document.createElement("div");
    templ.innerHTML = randomword2();
    return templ;
}
/*this right here is used for the word randomizing, the words are put in an array and
are linked with eachother*/
function randomword2(){
    var word;
    var words = ["Backside" , "Fronside" , "Halfcab" , "180" , "360" , "Nothing!"];
    x = Math.floor((Math.random()* words.length));
    word = words[x];
    return word;
    
}
////////////////////////////*this is for the third button*/////////////////////////////////\
trickButton3.addEventListener("click" , ayy);
//*this is a function in order to link it to the button*//
function ayy(){
    document.getElementById("trick3").innerHTML=randomword3();

}
/*this here used to target the div box in the html on where to display the word*/
function randomElement(){
    var templ = document.createElement("div");
    templ.innerHTML = randomword3();
    return templ;
}
/*this right here is used for the word randomizing, the words are put in an array and
are linked with eachother*/
function randomword3(){
    var word;
    var words = ["Ollie" , "Kickflip" , "Heelflip" , "Shove" , "Shove it" , "Nothing!" , "Bigspin"];
    x = Math.floor((Math.random()* words.length));
    word = words[x];
    return word;
    
}

