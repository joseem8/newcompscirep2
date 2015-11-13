var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
//made two new items for my other images that I added//
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");
//I added some em's to make the album name more animated//
//This the information that appears when you click on the four images in the middle//
item1.addEventListener("click", function(){
    info1.innerHTML = "This album is titled <em>Comfort</em> by Giraffage";
    info2.innerHTML = "This album dropped November 11, 2011 by Giraffage himself.";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "This album is titled <em>Needs</em> by Giraffage";
    info2.innerHTML = "This album dropped on February 12, 2013 by Giraffage himself. ";
});
item3.addEventListener("click", function(){
    info1.innerHTML = "This album is titled <em>No Reason</em> by Giraffage";
    info2.innerHTML = "This album dropped in November 18, 2014 by Fool's Gold Records. ";
});
item4.addEventListener("click", function(){
    info1.innerHTML = "This album is the <em>No Reason Remixes</em> for the album No Reason which was remixed by many artists such as Spazzkid, Qrion, Lindsay Lowend, Maxo, and Promnite!";
    info2.innerHTML = "This album dropped earlier this year in August 14th, 2015 by Fool's Gold Records. ";
});