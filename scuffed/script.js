

//width/height
var width = window.width;
var height = window.height;
document.width = document.getElementById("layout").width;
let cookh = document.getElementById("cookie").height;
let cookw = document.getElementById("cookie").width;

//sounds
var c1 = document.getElementById("clickeffect");
var c2 = document.getElementById("clickeffect2");
var c3 = document.getElementById("clickeffect3");
var c4 = document.getElementById("clickeffect4");
var c5 = document.getElementById("clickeffect5");
var c6 = document.getElementById("clickeffect6");

//news
i = 0;
//score stuff
a = 0



//lock/oopen images
if (localStorage.getItem("save2") == 1) {

  document.getElementById("item2").src = "grandma.webp";
  document.getElementById("name2").innerHTML = "Grandma" + "\n" + "(60)";


}

else {

  document.getElementById("item2").src = "lock.png";
  document.getElementById("name2").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save3") == 1) {

  document.getElementById("item3").src = "children.png";
  document.getElementById("name3").innerHTML = "Child Labor" + "\n" + "(6k)";

}

else {

  document.getElementById("item3").src = "lock.png";
  document.getElementById("name3").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save4") == 1) {

  document.getElementById("item4").src = "factory.png";
  document.getElementById("name4").innerHTML = "Factory" + "\n" + "(500k)";

}

else {

  document.getElementById("item4").src = "lock.png";
  document.getElementById("name4").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save5") == 1) {

  document.getElementById("item5").src = "skyscrapper.png";
  document.getElementById("name5").innerHTML = "Skytower" + "\n" + "(6mil)";

}

else {

  document.getElementById("item5").src = "lock.png";
  document.getElementById("name5").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save6") == 1) {

  document.getElementById("item6").src = "giga.png";
  document.getElementById("name6").innerHTML = "Giga Chad" + "\n" + "(250mil)";

}

else {

  document.getElementById("item6").src = "lock.png";
  document.getElementById("name6").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save7") == 1) {

  document.getElementById("item7").src = "privjet.png";
  document.getElementById("name7").innerHTML = "Sped Jet" + "\n" + "(30bil)";

}

else {

  document.getElementById("item7").src = "lock.png";
  document.getElementById("name7").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save8") == 1) {

  document.getElementById("item8").src = "spaceship.png";
  document.getElementById("name8").innerHTML = "❌Sship❌" + "\n" + "(250bil)";

}

else {

  document.getElementById("item8").src = "lock.png";
  document.getElementById("name8").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save9") == 1) {

  document.getElementById("item9").src = "timemac.jpg";
  document.getElementById("name9").innerHTML = "Time Machine (250bil)";

}

else {

  document.getElementById("item9").src = "lock.png";
  document.getElementById("name9").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save10") == 1) {

  document.getElementById("item10").src = "robot.png";
  document.getElementById("name10").innerHTML = "AI Intel (60 tril)";

}

else {

  document.getElementById("item10").src = "lock.png";
  document.getElementById("name10").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save11") == 1) {

  document.getElementById("item11").src = "alien.png";
  document.getElementById("name11").innerHTML = "Alien City (6 Qua)";

}

else {

  document.getElementById("item11").src = "lock.png";
  document.getElementById("name11").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save12") == 1) {

  document.getElementById("item12").src = "antimatter.webp";
  document.getElementById("name12").innerHTML = "Antimatter (500 Qua)";

}

else {

  document.getElementById("item12").src = "lock.png";
  document.getElementById("name12").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save13") == 1) {

  document.getElementById("item13").src = "converter.webp";
  document.getElementById("name13").innerHTML = "Converter (30 Qui)";

}

else {

  document.getElementById("item13").src = "lock.png";
  document.getElementById("name13").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save14") == 1) {

  document.getElementById("item14").src = "fractal.webp";
  document.getElementById("name14").innerHTML = "Frat Engine (2.5 Sext)";

}

else {

  document.getElementById("item14").src = "lock.png";
  document.getElementById("name14").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save15") == 1) {

  document.getElementById("item15").src = "futurechad.png";
  document.getElementById("name15").innerHTML = "Future Chad (500 Sext)";

}

else {

  document.getElementById("item15").src = "lock.png";
  document.getElementById("name15").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save16") == 1) {

  document.getElementById("item16").src = "javascript.webp";
  document.getElementById("name16").innerHTML = "Javascript (30 Sep)";

}

else {

  document.getElementById("item16").src = "lock.png";
  document.getElementById("name16").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save17") == 1) {

  document.getElementById("item17").src = "universe.png";
  document.getElementById("name17").innerHTML = "MEGA verse (1 Oct)";

}

else {

  document.getElementById("item17").src = "lock.png";
  document.getElementById("name17").innerHTML = "?????" + "\n" + "(???)";
}

if (localStorage.getItem("save18") == 1) {

  document.getElementById("item18").src = "light.png";
  document.getElementById("name18").innerHTML = "The Light (1 Non)";

}

else {

  document.getElementById("item18").src = "lock.png";
  document.getElementById("name18").innerHTML = "?????" + "\n" + "(???)";
}

//default buy ammount
buyammount = 1;
document.getElementById("buy1").style.borderColor = "red";
document.getElementById("buy10").style.borderColor = "black";
document.getElementById("buy100").style.borderColor = "black";
document.getElementById("buy1000").style.borderColor = "black";
//items this session
is = 0;
//rounding
myRound();
//starting cps
myCPS();
//labels
document.getElementById("label1").innerHTML = "Cookies: ";
document.getElementById("label2").innerHTML = "Cookies per Click: ";
document.getElementById("label3").innerHTML = "Cookies per Second: ";
document.getElementById("label4").innerHTML = "Multi: ";
document.getElementById("label5").innerHTML = "Total Clicks ";
document.getElementById("score").innerHTML = localStorage.getItem("score");
document.getElementById("clicks").innerHTML = localStorage.getItem("clicks");
document.getElementById("cps").innerHTML = localStorage.getItem("cps");
document.getElementById("multi").innerHTML = localStorage.getItem("multi") + "%";
document.getElementById("totalc").innerHTML = localStorage.getItem("totalc");
document.getElementById("bought").innerHTML = parseInt((localStorage.getItem("bought")));
document.getElementById("boughts").innerHTML = is;

//hiding second page
document.getElementById("AI").style.display = "none";
document.getElementById("alien").style.display = "none";
document.getElementById("antimatter").style.display = "none";
document.getElementById("converter").style.display = "none";
document.getElementById("fractal").style.display = "none";
document.getElementById("futuregiga").style.display = "none";
document.getElementById("java").style.display = "none";
document.getElementById("universe").style.display = "none";
document.getElementById("light").style.display = "none";

//setting background color
var u1 = document.getElementById("body");
let background = window.getComputedStyle(u1).backgroundColor;
document.getElementById("cookslot").style.backgroundColor = background;
document.getElementById("cookie").style.backgroundColor = background;
document.body.style.backgroundColor = "rgb(56,56,56)";
document.getElementById("title").style.backgroundColor = "rgb(0, 128, 255)";

//sub
/*document.getElementById("sub").onclick = function() { mySUB() };

function mySUB(){

  if (Number(localStorage.getItem("savebruh"))==0){
    localStorage.setItem("multi",localStorage.getItem("mutli")+5);
    document.getElementById("multi").innerHTML = localStorage.getItem("multi");

    localStorage.setItem("savebruh",1);
  }
}*/


//golden cookie
//gold1,gold2,gold3,gold4,gold5,gold6


mySpawnCookie();
document.getElementById("gold1").height = 0;
document.getElementById("gold2").height = 0;
document.getElementById("gold3").height = 0;
document.getElementById("gold4").height = 0;
document.getElementById("gold5").height = 0;
document.getElementById("gold6").height = 0;
document.getElementById("gold1").width = 0;
document.getElementById("gold2").width  = 0;
document.getElementById("gold3").width  = 0;
document.getElementById("gold4").width  = 0;
document.getElementById("gold5").width  = 0;
document.getElementById("gold6").width  = 0;

//new players
document.getElementById("name").innerHTML = localStorage.getItem("name");
myNewPlayer();

function mySpawnCookie(){

if (document.getElementById("gold1").height == 0 && document.getElementById("gold2").height == 0 && document.getElementById("gold3").height == 0 && document.getElementById("gold4").height == 0 && document.getElementById("gold5").height == 0 && document.getElementById("gold6").height == 0)  {
  cookiegold = Math.floor(Math.random() * 6);
    document.getElementById("gold1").style.transition = "all 0.5s";
  document.getElementById("gold2").style.transition = "all 0.5s";
  document.getElementById("gold3").style.transition = "all 0.5s";
  document.getElementById("gold4").style.transition = "all 0.5s";
  document.getElementById("gold5").style.transition = "all 0.5s";
  document.getElementById("gold6").style.transition = "all 0.5s";
  if (cookiegold==0){
    document.getElementById("gold1").height = 70;
    document.getElementById("gold2").height = 0;
    document.getElementById("gold3").height = 0;
    document.getElementById("gold4").height = 0;
    document.getElementById("gold5").height = 0;
    document.getElementById("gold6").height = 0;
    document.getElementById("gold1").width = 70;
    document.getElementById("gold2").width  = 0;
    document.getElementById("gold3").width  = 0;
    document.getElementById("gold4").width  = 0;
    document.getElementById("gold5").width  = 0;
    document.getElementById("gold6").width  = 0;
  }
  if (cookiegold==1){
    document.getElementById("gold1").height = 0;
    document.getElementById("gold2").height = 70;
    document.getElementById("gold3").height = 0;
    document.getElementById("gold4").height = 0;
    document.getElementById("gold5").height = 0;
    document.getElementById("gold6").height = 0;
    document.getElementById("gold1").width = 0;
    document.getElementById("gold2").width  = 70;
    document.getElementById("gold3").width  = 0;
    document.getElementById("gold4").width  = 0;
    document.getElementById("gold5").width  = 0;
    document.getElementById("gold6").width  = 0;
   }
  if (cookiegold==2){
    document.getElementById("gold1").height = 0;
    document.getElementById("gold2").height = 0;
    document.getElementById("gold3").height = 70;
    document.getElementById("gold4").height = 0;
    document.getElementById("gold5").height = 0;
    document.getElementById("gold6").height = 0;
    document.getElementById("gold1").width = 0;
    document.getElementById("gold2").width  = 0;
    document.getElementById("gold3").width  = 70;
    document.getElementById("gold4").width  = 0;
    document.getElementById("gold5").width  = 0;
    document.getElementById("gold6").width  = 0;
  }
  if (cookiegold==3){
    document.getElementById("gold1").height = 0;
    document.getElementById("gold2").height = 0;
    document.getElementById("gold3").height = 0;
    document.getElementById("gold4").height = 70;
    document.getElementById("gold5").height = 0;
    document.getElementById("gold6").height = 0;
    document.getElementById("gold1").width = 0;
    document.getElementById("gold2").width  = 0;
    document.getElementById("gold3").width  = 0;
    document.getElementById("gold4").width  = 70;
    document.getElementById("gold5").width  = 0;
    document.getElementById("gold6").width  = 0;
  }
  if (cookiegold==4){
    document.getElementById("gold1").height = 0;
    document.getElementById("gold2").height = 0;
    document.getElementById("gold3").height = 0;
    document.getElementById("gold4").height = 0;
    document.getElementById("gold5").height = 70;
    document.getElementById("gold6").height = 0;
    document.getElementById("gold1").width = 0;
    document.getElementById("gold2").width  = 0;
    document.getElementById("gold3").width  = 0;
    document.getElementById("gold4").width  = 0;
    document.getElementById("gold5").width  = 70;
    document.getElementById("gold6").width  = 0;
  }
  if (cookiegold==5){
    document.getElementById("gold1").height = 0;
    document.getElementById("gold2").height = 0;
    document.getElementById("gold3").height = 0;
    document.getElementById("gold4").height = 0;
    document.getElementById("gold5").height = 0;
    document.getElementById("gold6").height = 70;
    document.getElementById("gold1").width = 0;
    document.getElementById("gold2").width  = 0;
    document.getElementById("gold3").width  = 0;
    document.getElementById("gold4").width  = 0;
    document.getElementById("gold5").width  = 0;
    document.getElementById("gold6").width  = 70;
  }
}
  timegold = Math.floor(Math.random() * 61) + 60
  setTimeout("mySpawnCookie()",timegold*1000);
  
}


document.getElementById("gold1").onclick = function() { myGoldCook() };
document.getElementById("gold2").onclick = function() { myGoldCook() };
document.getElementById("gold3").onclick = function() { myGoldCook() };
document.getElementById("gold4").onclick = function() { myGoldCook() };
document.getElementById("gold5").onclick = function() { myGoldCook() };
document.getElementById("gold6").onclick = function() { myGoldCook() };

function myGoldCook(){
    document.getElementById("gold1").style.transition = "all 0.5s";
  document.getElementById("gold2").style.transition = "all 0.5s";
  document.getElementById("gold3").style.transition = "all 0.5s";
  document.getElementById("gold4").style.transition = "all 0.5s";
  document.getElementById("gold5").style.transition = "all 0.5s";
  document.getElementById("gold6").style.transition = "all 0.5s";
  document.getElementById("gold1").height = 0;
  document.getElementById("gold2").height = 0;
  document.getElementById("gold3").height = 0;
  document.getElementById("gold4").height = 0;
  document.getElementById("gold5").height = 0;
  document.getElementById("gold6").height = 0;
  document.getElementById("gold1").width = 0;
  document.getElementById("gold2").width  = 0;        
  document.getElementById("gold3").width  = 0;
  document.getElementById("gold4").width  = 0;
  document.getElementById("gold5").width  = 0;
  document.getElementById("gold6").width  = 0;

  var gold = document.getElementById("gold");
  gold.play();

  localStorage.setItem("score",localStorage.getItem("score")*5);
  document.getElementById("score").innerHTML = localStorage.getItem("score");
  myRound();
}


//NEWS

/*news = ["Your cookies are known for miles around!!", "Grandma reported having seizures after working to long", "Your bakery said to have started Covid 23", "Rumors of Children working in factories", "Child Labor just wrong states Maxi", "Mysterious man named Eric quoting Trump at local cookie store.", "Absolutely awesome cookies", "Plants vs Zombies sold to DumDum Corporations", "You haven't subscribed yet?", "A giga chad spotted in the forest", "Cookies are overrated... said the bagel", "Muffin Corporation sues Cookie Corporation for advertising cookies", "Ten cookie stores shut down by man in Ohio","Man named IDK LMAO found in cookie processor"];

document.getElementById("news").innerHTML = news[0];
mynews();

function mynews(){
  document.getElementById("news").style.transition = "all 0.5s";
  if(i<14) {
    i = i+1;
    document.getElementById("news").innerHTML = news[i];
  }
  else{
    i = 0;
    document.getElementById("news").innerHTML = news[i];
  }

  setTimeout("mynews()",3000);
}*/


//Round all values to nearest hundredths
function myRound() {
  a = Math.round(localStorage.getItem("score") * 1000) / 1000;
  localStorage.setItem("score", a);

  cps = Math.round(Number(localStorage.getItem("cps")) * 1000) / 1000;
  clicks = Math.round(Number(localStorage.getItem("clicks")) * 1000) / 1000;
  localStorage.setItem("cps", cps);
  localStorage.setItem("clicks", clicks);


  document.getElementById("cps").innerHTML = localStorage.getItem("cps");
  document.getElementById("clicks").innerHTML = localStorage.getItem("clicks");
  document.getElementById("score").innerHTML = localStorage.getItem("score");

}


//new players name bakery
document.getElementById("name").innerHTML = localStorage.getItem("name");

function myNewPlayer() {
  while (document.getElementById("name").innerHTML === "") {
    let answer = prompt("Name your bakery", "name");



    if (answer == null || answer == "") {
      alert("Name cannot be empty");

    }

    else {
      let length = answer.length;

      if (length > 20) {
        alert("Name cannot be longer than 20 characters");
      }
      else {
        localStorage.setItem("name", answer + "'s Bakery");
        document.getElementById("name").innerHTML = localStorage.getItem("name");
      }
    }

    
    localStorage.setItem("score", 1);
    localStorage.setItem("clicks", 1);
    localStorage.setItem("cps", 0);
    localStorage.setItem("multi", 0);
    localStorage.setItem("totalc", 0);
    localStorage.setItem("bought", 0)
    localStorage.setItem("boughts", 0)
    localStorage.setItem("save2", 0);
    localStorage.setItem("save3", 0);
    localStorage.setItem("save4", 0);
    localStorage.setItem("save5", 0);
    localStorage.setItem("save6", 0);
    localStorage.setItem("save7", 0);
    localStorage.setItem("save8", 0);
    localStorage.setItem("save9", 0);
  

    document.getElementById("score").innerHTML = localStorage.getItem("score");
    document.getElementById("clicks").innerHTML = localStorage.getItem("clicks");
    document.getElementById("cps").innerHTML = localStorage.getItem("cps");
    document.getElementById("multi").innerHTML = localStorage.getItem("multi");
    document.getElementById("totalc").innerHTML = localStorage.getItem("totalc");
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));
    document.getElementById("boughts").innerHTML = parseInt(localStorage.getItem("boughts"));

    

    cookiegold = Math.floor(Math.random() * 6);
  if (cookiegold==0){
    document.getElementById("gold1").height = 70;
    document.getElementById("gold2").height = 0;
    document.getElementById("gold3").height = 0;
    document.getElementById("gold4").height = 0;
    document.getElementById("gold5").height = 0;
    document.getElementById("gold6").height = 0;
    document.getElementById("gold1").width = 70;
    document.getElementById("gold2").width  = 0;
    document.getElementById("gold3").width  = 0;
    document.getElementById("gold4").width  = 0;
    document.getElementById("gold5").width  = 0;
    document.getElementById("gold6").width  = 0;
  }
  if (cookiegold==1){
    document.getElementById("gold1").height = 0;
    document.getElementById("gold2").height = 70;
    document.getElementById("gold3").height = 0;
    document.getElementById("gold4").height = 0;
    document.getElementById("gold5").height = 0;
    document.getElementById("gold6").height = 0;
    document.getElementById("gold1").width = 0;
    document.getElementById("gold2").width  = 70;
    document.getElementById("gold3").width  = 0;
    document.getElementById("gold4").width  = 0;
    document.getElementById("gold5").width  = 0;
    document.getElementById("gold6").width  = 0;
   }
  if (cookiegold==2){
    document.getElementById("gold1").height = 0;
    document.getElementById("gold2").height = 0;
    document.getElementById("gold3").height = 70;
    document.getElementById("gold4").height = 0;
    document.getElementById("gold5").height = 0;
    document.getElementById("gold6").height = 0;
    document.getElementById("gold1").width = 0;
    document.getElementById("gold2").width  = 0;
    document.getElementById("gold3").width  = 70;
    document.getElementById("gold4").width  = 0;
    document.getElementById("gold5").width  = 0;
    document.getElementById("gold6").width  = 0;
  }
  if (cookiegold==3){
    document.getElementById("gold1").height = 0;
    document.getElementById("gold2").height = 0;
    document.getElementById("gold3").height = 0;
    document.getElementById("gold4").height = 70;
    document.getElementById("gold5").height = 0;
    document.getElementById("gold6").height = 0;
    document.getElementById("gold1").width = 0;
    document.getElementById("gold2").width  = 0;
    document.getElementById("gold3").width  = 0;
    document.getElementById("gold4").width  = 70;
    document.getElementById("gold5").width  = 0;
    document.getElementById("gold6").width  = 0;
  }
  if (cookiegold==4){
    document.getElementById("gold1").height = 0;
    document.getElementById("gold2").height = 0;
    document.getElementById("gold3").height = 0;
    document.getElementById("gold4").height = 0;
    document.getElementById("gold5").height = 70;
    document.getElementById("gold6").height = 0;
    document.getElementById("gold1").width = 0;
    document.getElementById("gold2").width  = 0;
    document.getElementById("gold3").width  = 0;
    document.getElementById("gold4").width  = 0;
    document.getElementById("gold5").width  = 70;
    document.getElementById("gold6").width  = 0;
  }
  if (cookiegold==5){
    document.getElementById("gold1").height = 0;
    document.getElementById("gold2").height = 0;
    document.getElementById("gold3").height = 0;
    document.getElementById("gold4").height = 0;
    document.getElementById("gold5").height = 0;
    document.getElementById("gold6").height = 70;
    document.getElementById("gold1").width = 0;
    document.getElementById("gold2").width  = 0;
    document.getElementById("gold3").width  = 0;
    document.getElementById("gold4").width  = 0;
    document.getElementById("gold5").width  = 0;
    document.getElementById("gold6").width  = 70;
  }

  }

}

//function to change your bakery name
function myNameChange() {
  c1.play();
  answer1 = prompt("Do you want to change your name? (yes/no)");
  i = "True";

  if (answer1.trim() === "yes") {
    while (i === "True") {
      newname = prompt("What would you want your new name to be?");
      let length1 = newname.length;


      if (newname === "") {
        alert("Name cannot be empty");
      }

      else if (length1 > 20) {
        alert("Name cannot be more than 20 characters");
      }

      else {
        localStorage.setItem("name", newname + "'s Bakery");
        document.getElementById("name").innerHTML = localStorage.getItem("name");
        i = "False";
      }
    }
  }
}
document.getElementById("namechange").onclick = function() { myNameChange() };

//rebirth
document.getElementById("rebirth").onclick = function() { myRebirth() };
function myRebirth() {
  c1.play();
  //if recost = 0
  if (Number(localStorage.getItem("recost")) === 0) {
    localStorage.setItem("recost", 1)
  }

  //prompt if u want to rebirth
  answer3 = prompt("Do you want to rebirth? (yes/no) Cost: " + Number(localStorage.getItem("recost")) * 250000000 + " cookies");

  if (answer3 == "yes" && localStorage.getItem("score") >= 250000000 * localStorage.getItem("recost")) {

    //increased multi
    localStorage.setItem("multi", Number(localStorage.getItem("multi")) + 25);
    document.getElementById("multi").innerHTML = localStorage.getItem("multi") + "%";
    localStorage.setItem("recost", localStorage.getItem("recost") * 2);


    //reset basic stats
    localStorage.setItem("score", 0);
    localStorage.setItem("clicks", 1);
    localStorage.setItem("cps", 0);
    localStorage.setItem("save2", 0);
    localStorage.setItem("save3", 0);
    localStorage.setItem("save4", 0);
    localStorage.setItem("save5", 0);
    localStorage.setItem("save6", 0);
    localStorage.setItem("save7", 0);
    localStorage.setItem("save8", 0);
    localStorage.setItem("save9", 0);
    localStorage.setItem("save10", 0);
    localStorage.setItem("save11", 0);
    localStorage.setItem("save12", 0);
    localStorage.setItem("save13", 0);
    localStorage.setItem("save14", 0);
    localStorage.setItem("save15", 0);
    localStorage.setItem("save16", 0);
    localStorage.setItem("save17", 0);
    localStorage.setItem("save18", 0);
 
 
    
    document.getElementById("score").innerHTML = localStorage.getItem("score");
    document.getElementById("clicks").innerHTML = localStorage.getItem("clicks");
    document.getElementById("cps").innerHTML = localStorage.getItem("cps");
    document.getElementById("totalc").innerHTML = localStorage.getItem("totalc");

    document.getElementById("item2").src = "lock.png";
    document.getElementById("name2").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item3").src = "lock.png";
    document.getElementById("name3").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item4").src = "lock.png";
    document.getElementById("name4").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item5").src = "lock.png";
    document.getElementById("name5").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item6").src = "lock.png";
    document.getElementById("name6").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item7").src = "lock.png";
    document.getElementById("name7").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item8").src = "lock.png";
    document.getElementById("name8").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item9").src = "lock.png";
    document.getElementById("name9").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item10").src = "lock.png";
    document.getElementById("name10").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item11").src = "lock.png";
    document.getElementById("name11").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item12").src = "lock.png";
    document.getElementById("name12").innerHTML = "?????" + "\n" + "(???)";

    document.getElementById("item13").src = "lock.png";
    document.getElementById("name13").innerHTML = "?????" + "\n" + "(???)";
     document.getElementById("item14").src = "lock.png";
    document.getElementById("name14").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item15").src = "lock.png";
    document.getElementById("name15").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item16").src = "lock.png";
    document.getElementById("name16").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item17").src = "lock.png";
    document.getElementById("name17").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item18").src = "lock.png";
    document.getElementById("name18").innerHTML = "?????" + "\n" + "(???)";
  }
}

//reset all stats
document.getElementById("reset").onclick = function() { myReset() };
function myReset() {
  c1.play();
  answer2 = prompt("Are you SURE you want to reset ALL stats?? (yes/no)");
  if (answer2.trim() == "yes") {
    alert("You have just reset!!!");
    localStorage.setItem("score", 0);
    localStorage.setItem("clicks", 1);
    localStorage.setItem("cps", 0);
    localStorage.setItem("multi", 0);
    localStorage.setItem("totalc", 0);
    localStorage.setItem("bought", 0);
    localStorage.setItem("boughts", 0);
    localStorage.setItem("save2", 0);
    localStorage.setItem("save3", 0);
    localStorage.setItem("save4", 0);
    localStorage.setItem("save5", 0);
    localStorage.setItem("save6", 0);
    localStorage.setItem("save7", 0);
    localStorage.setItem("save8", 0);
    localStorage.setItem("save9", 0);
    localStorage.setItem("save10", 0);
    localStorage.setItem("save11", 0);
    localStorage.setItem("save12", 0);
    localStorage.setItem("save13", 0);
    localStorage.setItem("save14", 0);
    localStorage.setItem("save15", 0);
    localStorage.setItem("save16", 0);
    localStorage.setItem("save17", 0);
    localStorage.setItem("save18", 0);
    localStorage.setItem("recost", 1);
    localStorage.setItem("savebruh",0);


    document.getElementById("score").innerHTML = localStorage.getItem("score");
    document.getElementById("clicks").innerHTML = localStorage.getItem("clicks");
    document.getElementById("cps").innerHTML = localStorage.getItem("cps");

    document.getElementById("multi").innerHTML = localStorage.getItem("multi");
    document.getElementById("totalc").innerHTML = localStorage.getItem("totalc");
    document.getElementById("bought").innerHTML = localStorage.getItem("bought");
    document.getElementById("boughts").innerHTML = localStorage.getItem("boughts");

    document.getElementById("item2").src = "lock.png";
    document.getElementById("name2").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item3").src = "lock.png";
    document.getElementById("name3").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item4").src = "lock.png";
    document.getElementById("name4").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item5").src = "lock.png";
    document.getElementById("name5").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item6").src = "lock.png";
    document.getElementById("name6").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item7").src = "lock.png";
    document.getElementById("name7").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item8").src = "lock.png";
    document.getElementById("name8").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item9").src = "lock.png";
    document.getElementById("name9").innerHTML = "?????" + "\n" + "(???)";
     document.getElementById("item10").src = "lock.png";
    document.getElementById("name10").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item11").src = "lock.png";
    document.getElementById("name11").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item12").src = "lock.png";
    document.getElementById("name12").innerHTML = "?????" + "\n" + "(???)";
    
    document.getElementById("item13").src = "lock.png";
    document.getElementById("name13").innerHTML = "?????" + "\n" + "(???)";
     document.getElementById("item14").src = "lock.png";
    document.getElementById("name14").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item15").src = "lock.png";
    document.getElementById("name15").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item16").src = "lock.png";
    document.getElementById("name16").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item17").src = "lock.png";
    document.getElementById("name17").innerHTML = "?????" + "\n" + "(???)";
    document.getElementById("item18").src = "lock.png";
    document.getElementById("name18").innerHTML = "?????" + "\n" + "(???)";
  }
}

//cookie big
function enlargeImg() {

  document.getElementById("cookie").style.transform = "scale(1.05)";

  document.getElementById("cookie").style.transition = "transform 0.25s ease";
}

//cookie normal
function resetImg() {

  document.getElementById("cookie").style.transform = "scale(1)";
  document.getElementById("cookie").style.transition = "transform 0.25s ease";
}

//click for cookies
document.getElementById("cookie").onclick = function() { myCookie() };
function myCookie() {
  //clicksoundeffect
  effect = Math.floor(Math.random() * 6);
  if (effect == 0) {
    c1.play();
  }
  if (effect == 1) {
    c2.play();
  }
  if (effect == 2) {
    c3.play();
  }
  if (effect == 3) {
    c4.play();
  }
  if (effect == 4) {
    c5.play();
  }
  if (effect == 5) {
    c6.play();
  }


  if (totalc % 2 == 0) {
    enlargeImg();
  }
  else {
    resetImg();
  }
  increase = Number(localStorage.getItem("score")) + Number(localStorage.getItem("clicks"));

  document.getElementById("score").innerHTML = increase;
  localStorage.setItem("score", Number(document.getElementById("score").innerHTML));

  totalc = parseInt(localStorage.getItem("totalc")) + 1
  localStorage.setItem("totalc", totalc);



  document.getElementById("totalc").innerHTML = localStorage.getItem("totalc");

  myRound();

}

//cookies per second
function myCPS() {
  persec = Number(localStorage.getItem("score")) + Number(localStorage.getItem("cps"));
  localStorage.setItem("score", persec);

  document.getElementById("score").innerHTML = localStorage.getItem("score");
  setTimeout("myCPS()", 1000);
  myRound();
}


//Toggle pages
pagenum = 1;
document.getElementById("left").onclick = function() { myLeft()};
document.getElementById("right").onclick = function() { myRight()};
function myLeft(){
  if (pagenum != 1){
    document.getElementById("cursor").style.display = "block";
    document.getElementById("grandma").style.display = "block";
    document.getElementById("children").style.display = "block";
    document.getElementById("factory").style.display = "block";
    document.getElementById("skyscrapper").style.display = "block";
    document.getElementById("giga").style.display = "block";
    document.getElementById("jet").style.display = "block";
    document.getElementById("ship").style.display = "block";
    document.getElementById("time").style.display = "block";
    
    
    
    document.getElementById("AI").style.display = "none";
    document.getElementById("alien").style.display = "none";
    document.getElementById("antimatter").style.display = "none";
    document.getElementById("converter").style.display = "none";
    document.getElementById("fractal").style.display = "none";
    document.getElementById("futuregiga").style.display = "none";
    document.getElementById("java").style.display = "none";
    document.getElementById("universe").style.display = "none";
    document.getElementById("light").style.display = "none";
    pagenum = 1;
  }
}
function myRight(){
  if (pagenum == 1){
    document.getElementById("cursor").style.display = "none";
    document.getElementById("cursor").style.display = "none";
    document.getElementById("grandma").style.display = "none";
    document.getElementById("children").style.display = "none";
    document.getElementById("factory").style.display = "none";
    document.getElementById("skyscrapper").style.display = "none";
    document.getElementById("giga").style.display = "none";
    document.getElementById("jet").style.display = "none";
    document.getElementById("ship").style.display = "none";
    document.getElementById("time").style.display = "none";
    
    document.getElementById("AI").style.display = "block";
    document.getElementById("alien").style.display = "block";
    document.getElementById("antimatter").style.display = "block";
    document.getElementById("converter").style.display = "block";
    document.getElementById("fractal").style.display = "block";
    document.getElementById("futuregiga").style.display = "block";
    document.getElementById("java").style.display = "block";
    document.getElementById("universe").style.display = "block";
    document.getElementById("light").style.display = "block";
    pagenum =2;
  }
}
//BUY ammount
document.getElementById("buy1").onclick = function() { mybuy1() };
document.getElementById("buy10").onclick = function() { mybuy10() };
document.getElementById("buy100").onclick = function() { mybuy100() };
document.getElementById("buy1000").onclick = function() { mybuy1000() };
function mybuy1() {
  c1.play();
  buyammount = 1;
  document.getElementById("buy1").style.borderColor = "red";
  document.getElementById("buy10").style.borderColor = "black";
  document.getElementById("buy100").style.borderColor = "black";
  document.getElementById("buy1000").style.borderColor = "black";
}
function mybuy10() {
  c1.play();
  buyammount = 10;
  document.getElementById("buy1").style.borderColor = "black";
  document.getElementById("buy10").style.borderColor = "red";
  document.getElementById("buy100").style.borderColor = "black";
  document.getElementById("buy1000").style.borderColor = "black";
}
function mybuy100() {
  c1.play();
  buyammount = 100;
  document.getElementById("buy1").style.borderColor = "black";
  document.getElementById("buy10").style.borderColor = "black";
  document.getElementById("buy100").style.borderColor = "red";
  document.getElementById("buy1000").style.borderColor = "black";
}
function mybuy1000() {
  c1.play();
  buyammount = 1000;
  document.getElementById("buy1").style.borderColor = "black";
  document.getElementById("buy10").style.borderColor = "black";
  document.getElementById("buy100").style.borderColor = "black";
  document.getElementById("buy1000").style.borderColor = "red";
}



//item 1: cursor
document.getElementById("cursor").onclick = function() { myBuyCursor() };
function myBuyCursor() {

  if (localStorage.getItem("score") >= 15 * buyammount) {

    localStorage.setItem("clicks", Number(localStorage.getItem("clicks")) + 0.1 * buyammount * (1 + (localStorage.getItem("multi") / 100)));
    localStorage.setItem("score", localStorage.getItem("score") - 15 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "cursor.png";
    document.getElementById("image1").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));
    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

    if (localStorage.getItem("save2") == 1) {

    }
    else {
      localStorage.setItem("save2", 1);
      var item2 = document.getElementById("item2");
      item2.src = "grandma.webp";
      document.getElementById("name2").innerHTML = "Grandma \n (60)";
    }
  }
}

//item2 grandma
document.getElementById("grandma").onclick = function() { myBuyGrandma() };
function myBuyGrandma() {
  if (localStorage.getItem("score") >= 60 * buyammount && document.getElementById("name2").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("cps", Number(localStorage.getItem("cps")) + 1 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 60 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "grandma.webp";

    document.getElementById("image2").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

    if (localStorage.getItem("save3") == 1) {

    }
    else {
      localStorage.setItem("save3", 1);
      var item3 = document.getElementById("item3");
      item3.src = "children.png";
      document.getElementById("name3").innerHTML = "Child Labor \n (6k)";
    }
  }
}

//item3 children
document.getElementById("children").onclick = function() { myBuyChildren() };
function myBuyChildren() {
  if (localStorage.getItem("score") >= 6000 * buyammount && document.getElementById("name3").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("cps", Number(localStorage.getItem("cps")) + 150 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 6000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "children.png";
    document.getElementById("image3").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;
    if (localStorage.getItem("save4") == 1) {

    }
    else {
      localStorage.setItem("save4", 1);
      var item4 = document.getElementById("item4");
      item4.src = "factory.png";
      document.getElementById("name4").innerHTML = "Factory \n (500k)";
    }
  }
}

document.getElementById("factory").onclick = function() { myBuyFactory() };
function myBuyFactory() {
  if (localStorage.getItem("score") >= 500000 * buyammount & document.getElementById("name4").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("clicks", Number(localStorage.getItem("clicks")) + 3500 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 500000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "factory.png";
    document.getElementById("image4").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;
    if (localStorage.getItem("save5") == 1) {

    }
    else {
      localStorage.setItem("save5", 1);
      var item5 = document.getElementById("item5");
      item5.src = "skyscrapper.png";
      document.getElementById("name5").innerHTML = "Skytower \n (6mil)";
    }
  }
}

document.getElementById("skyscrapper").onclick = function() { myBuySkyscrapper() };
function myBuySkyscrapper() {
  if (localStorage.getItem("score") >= 6000000 * buyammount & document.getElementById("name5").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("cps", Number(localStorage.getItem("cps")) + 175000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 6000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "skyscrapper.png";
    document.getElementById("image5").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;
    if (localStorage.getItem("save6") == 1) {

    }
    else {
      localStorage.setItem("save6", 1);
      var item6 = document.getElementById("item6");
      item6.src = "giga.png";
      document.getElementById("name6").innerHTML = "Giga Chad \n (250mil)";
    }

  }
}

document.getElementById("giga").onclick = function() { myBuyGiga() };
function myBuyGiga() {
  if (localStorage.getItem("score") >= 250000000 * buyammount & document.getElementById("name6").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("clicks", Number(localStorage.getItem("clicks")) + 1750000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 250000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "giga.png";
    document.getElementById("image6").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

    if (localStorage.getItem("save7") == 1) {

    }
    else {
      localStorage.setItem("save7", 1);
      var item7 = document.getElementById("item7");
      item7.src = "privjet.png";
      document.getElementById("name7").innerHTML = "Sped Jet \n (30bil)";
    }
  }
}

document.getElementById("jet").onclick = function() { myBuyJet() };
function myBuyJet() {
  if (localStorage.getItem("score") >= 30000000000 * buyammount & document.getElementById("name7").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("cps", Number(localStorage.getItem("cps")) + 900000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 30000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "privjet.png";
    document.getElementById("image7").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

    if (localStorage.getItem("save7") == 1) {

    }
    else {
      localStorage.setItem("save7", 1);
      var item7 = document.getElementById("item7");
      item7.src = "privjet.png";
      document.getElementById("name7").innerHTML = "Sped Jet \n (30bil)";


    }

    if (localStorage.getItem("save8") == 1) {

    }
    else {
      localStorage.setItem("save8", 1);
      var item8 = document.getElementById("item8");
      item8.src = "spaceship.png";
      document.getElementById("name8").innerHTML = "❌Sship❌ \n (250bil)";
    }

    if (localStorage.getItem("save9") == 1) {

    }
    else {
      localStorage.setItem("save9", 1);
      var item9 = document.getElementById("item9");
      item9.src = "timemac.jpg";
      document.getElementById("name9").innerHTML = "Time Machine (250bil)";
    }
  }
}

document.getElementById("ship").onclick = function() { myBuyspaceship() };
function myBuyspaceship() {
  if (localStorage.getItem("score") >= 250000000000 * buyammount & document.getElementById("name8").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("clicks", Number(localStorage.getItem("clicks")) - 1800000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 250000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "spaceship.png";
    document.getElementById("image8").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

    if (localStorage.getItem("save10") == 1) {

    }
    else {
      localStorage.setItem("save10", 1);
      var item10 = document.getElementById("item10");
      item10.src = "robot.png";
      document.getElementById("name10").innerHTML = "AI Intel \n (60 tril)";


    }

  }
}

document.getElementById("time").onclick = function() { myBuyTime() };
function myBuyTime() {
  if (localStorage.getItem("score") >= 250000000000 * buyammount & document.getElementById("name9").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("clicks", Number(localStorage.getItem("clicks")) + 1800000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 250000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "timemac.jpg";
    document.getElementById("image9").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

    if (localStorage.getItem("save10") == 1) {

    }
    else {
      localStorage.setItem("save10", 1);
      var item10 = document.getElementById("item10");
      item10.src = "robot.png";
      document.getElementById("name10").innerHTML = "AI Intel \n (60 tril)";

  }
}

}

document.getElementById("AI").onclick = function() { myBuyAI() };
function myBuyAI() {
  if (localStorage.getItem("score") >= 60000000000000 * buyammount & document.getElementById("name10").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("cps", Number(localStorage.getItem("cps")) + 1890000000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 60000000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "robot.png";
    document.getElementById("image10").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

    if (localStorage.getItem("save11") == 1) {

    }
    else {
      localStorage.setItem("save11", 1);
      var item11 = document.getElementById("item11");
      item11.src = "alien.png";
      document.getElementById("name11").innerHTML = "Alien City \n (6 Qua)";

  }
   
}

}

document.getElementById("alien").onclick = function() { myBuyalien() };
function myBuyalien() {
  if (localStorage.getItem("score") >= 6000000000000000 * buyammount & document.getElementById("name11").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("cps", Number(localStorage.getItem("cps")) + 190000000000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 6000000000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "alien.png";
    document.getElementById("image11").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

    
    if (localStorage.getItem("save12") == 1) {

    }
    else {
      localStorage.setItem("save12", 1);
      var item12 = document.getElementById("item12");
      item12.src = "antimatter.webp";
      document.getElementById("name12").innerHTML = "Antimatter \n (500 Qua)";

  }
   
}

}

document.getElementById("antimatter").onclick = function() { myBuyANTI() };
function myBuyANTI() {
  if (localStorage.getItem("score") >= 500000000000000000 * buyammount & document.getElementById("name12").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("clicks", Number(localStorage.getItem("clicks")) + 4350000000000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 500000000000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "antimatter.webp";
    document.getElementById("image12").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

    
    if (localStorage.getItem("save13") == 1) {

    }
    else {
      localStorage.setItem("save13", 1);
      var item13 = document.getElementById("item13");
      item13.src = "converter.webp";
      document.getElementById("name13").innerHTML = "Converter (30 Qui)";

  }
   
}

}

document.getElementById("converter").onclick = function() { myBuyConv() };
function myBuyConv() {
  if (localStorage.getItem("score") >= 30000000000000000000 * buyammount & document.getElementById("name13").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("cps", Number(localStorage.getItem("cps")) + 1995000000000000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 30000000000000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "converter.webp";
    document.getElementById("image13").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

    if (localStorage.getItem("save14") == 1) {

    }
    else {
      localStorage.setItem("save14", 1);
      var item14 = document.getElementById("item14");
      item14.src = "fractal.webp";
      document.getElementById("name14").innerHTML = "Frat Engine (2.5 Sext)";

  }
}

}

document.getElementById("fractal").onclick = function() { myBuyfrac() };
function myBuyfrac() {
  if (localStorage.getItem("score") >= 2500000000000000000000 * buyammount & document.getElementById("name14").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("clicks", Number(localStorage.getItem("clicks")) + 22000000000000000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 2500000000000000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "fractal.webp";
    document.getElementById("image14").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

   if (localStorage.getItem("save15") == 1) {

    }
    else {
      localStorage.setItem("save15", 1);
      var item15 = document.getElementById("item15");
      item15.src = "futurechad.png";
      document.getElementById("name15").innerHTML = "Future Chad (500 Sext)";
}

}
}

document.getElementById("futuregiga").onclick = function() { myBuyFgiga() };
function myBuyFgiga() {
  if (localStorage.getItem("score") >= 500000000000000000000000 * buyammount & document.getElementById("name15").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("clicks", Number(localStorage.getItem("clicks")) + 4400000000000000000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 500000000000000000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "futurechad.png";
    document.getElementById("image15").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

   if (localStorage.getItem("save16") == 1) {

    }
    else {
      localStorage.setItem("save16", 1);
      var item16 = document.getElementById("item16");
      item16.src = "javascript.webp";
      document.getElementById("name16").innerHTML = "Javascript (30 Sep)";
}

}
}

document.getElementById("java").onclick = function() { myBuyjava() };
function myBuyjava() {
  if (localStorage.getItem("score") >= 30000000000000000000000000 * buyammount & document.getElementById("name16").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("cps", Number(localStorage.getItem("cps")) + 2000000000000000000000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 30000000000000000000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "javascript.webp";
    document.getElementById("image16").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

   if (localStorage.getItem("save17") == 1) {

    }
    else {
      localStorage.setItem("save17", 1);
      var item17 = document.getElementById("item17");
      item17.src = "universe.png";
      document.getElementById("name17").innerHTML = "MEGA verse (1 Oct)";
}

}
}

document.getElementById("universe").onclick = function() { myBuyuni() };
function myBuyuni() {
  if (localStorage.getItem("score") >= 1000000000000000000000000000 * buyammount & document.getElementById("name17").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("cps", Number(localStorage.getItem("cps")) + 69000000000000000000000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 1000000000000000000000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "universe.png";
    document.getElementById("image17").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

   if (localStorage.getItem("save18") == 1) {

    }
    else {
      localStorage.setItem("save18", 1);
      var item18 = document.getElementById("item18");
      item18.src = "light.png";
      document.getElementById("name18").innerHTML = "The Light (1 Non)";
}

}
}

document.getElementById("light").onclick = function() { myBuylight() };
function myBuylight() {
  if (localStorage.getItem("score") >= 1000000000000000000000000000000 * buyammount & document.getElementById("name17").innerHTML != "?????" + "\n" + "(???)") {
    localStorage.setItem("clicks", Number(localStorage.getItem("clicks")) + 69696000000000000000000000000 * buyammount * (1 + (localStorage.getItem("multi") / 100)));

    localStorage.setItem("score", localStorage.getItem("score") - 1000000000000000000000000000000 * buyammount);

    myRound();

    const myImage = new Image(30, 30);
    myImage.src = "light.png";
    document.getElementById("image18").appendChild(myImage);

    adding = parseInt((localStorage.getItem("bought"))) + 1 * buyammount;
    localStorage.setItem("bought", parseInt(adding));
    document.getElementById("bought").innerHTML = parseInt(localStorage.getItem("bought"));

    is = is + 1 * buyammount;
    document.getElementById("boughts").innerHTML = is;

   
}
}