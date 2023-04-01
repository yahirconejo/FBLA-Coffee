const burgernav = document.getElementById('burgernav');
const navoverlay = document.getElementById('navoverlay');
let menuOpen = false;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var largestRatio = ((6 + (1/4))*115) / ((7 + (5/8))* 115);
var smallestRatio = ((7 + 0)*115) / ((4 + (1/8))* 115);
var curentRatio = windowHeight / windowWidth;
var coffespill1 = document.getElementById("coffeSpill");
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var desub = document.getElementById("deSub");
var coffeOVtext= document.getElementById("coffeOVtext");
var coffeOVtexth2 = document.getElementById("coffeOVtexth2");


var s1button = document.getElementById("coffeCupTop0");
var napkin = document.getElementById("napkinball");
var wordnap = document.getElementById("wordNapkin");
var names = document.getElementById("Name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var terms = document.getElementById("terms");
var termsa = document.getElementById("termsa");
var signBT = document.getElementById("signupbtn");
var check = document.getElementById("checkO");
var navlogin = document.getElementById("navlogin");
var navovogin = document.getElementById("navovlogin");



function fitscreen(){
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  largestRatio = ((6 + (1/4))*115) / ((7 + (5/8))* 115);
  smallestRatio = ((7 + 0)*115) / ((4 + (1/8))* 115);
  curentRatio = windowHeight / windowWidth;
  if(curentRatio<largestRatio){
    section1.style.height = "81vw";
    section3.style.height = "80vw";
    desub.style.margin = " calc(55vw - 14vw) 0px 0px 20vw ";
    coffeOVtexth2.style.opacity = "0";

  } else if(curentRatio>smallestRatio){
    section1.style.height = "165vw";
    section3.style.height = "165vw";
    desub.style.margin = " calc(120vw - 14vw) 0px 0px 20vw ";
    coffeOVtexth2.style.fontSize = "15vw";
    coffeOVtexth2.style.paddingTop = "calc(((100vh - 40vh - 11.5vw)/ 2) - 50vw)";
    coffeOVtexth2.style.opacity = "1";

  }else{
    section1.style.height = "95vh";
    section3.style.height = "95vh";
    desub.style.margin = " calc(80vh - 14vw) 0px 0px 20vw ";
    coffeOVtexth2.style.fontSize = "5vw";
    coffeOVtexth2.style.paddingTop = "calc(((100vh - 40vh - 11.5vw)/ 2) - 5vw)";
    coffeOVtexth2.style.opacity = "1";
  }

}

window.addEventListener('resize', fitscreen);
fitscreen();

burgernav.addEventListener('click', () =>{
  if(!menuOpen){
    burgernav.classList.add('open');
    navoverlay.style.width = "100%";
    menuOpen = true;
  } else {
    burgernav.classList.remove('open');
    navoverlay.style.width = "0%";
    menuOpen = false;
  }
});



 function raincoffe(){
  var coffeCup = document.getElementById("teacup");
  var elementTop = coffeCup.getBoundingClientRect().top;
  var coffe = document.getElementById("coffeRain");
  var cof0 = document.getElementById("coffeOverflow0");
  var cof1 = document.getElementById("coffeOverflow1");
  var cof2 = document.getElementById("coffeOverflow2");
  var highlight = document.getElementById("highlight");
          if(elementTop < windowHeight){
                setTimeout(function(){
                  coffe.classList.add("rain");
                }, 1000);
                setTimeout(function(){
                      cof0.classList.add("coffeOverflowAdd0");
                      cof1.classList.add("coffeOverflowAdd");
                }, 2000);
                setTimeout(function(){
                  cof2.classList.add("coffeOverflowAdd2");
                }, 3500);
                setTimeout(function(){
                  highlight.classList.add("highlighting");
                }, 5000);
          }
  }

  
 window.addEventListener("scroll", raincoffe);
raincoffe();

function colorchange(){
  var elementTop3 = section3.getBoundingClientRect().top;
  var burger = document.getElementById("burger");
  var bar = document.getElementById("bar");
  if(elementTop3 < windowHeight + 50){
    bar.style.height = "70px"
  } else{
    bar.style.height = "0px"
  }

}

window.addEventListener("scroll", colorchange);
colorchange();


s1button.addEventListener("mouseenter", function(){
   napkin.classList.add("napkinrollout");
   coffespill1.classList.add("coffeSoakUp");
   setTimeout(function(){
      wordnap.classList.add("wordNapANNA");
      names.classList.add("wordNapANNA");
      email.classList.add("wordNapANNA");
      password.classList.add("wordNapANNA");
      terms.classList.add("wordNapANNA");
      termsa.classList.add("wordNapANNA");
      signBT.classList.add("wordNapANNA");
   }, 2000 );
   
});


signBT.addEventListener("click", function(){
  var text1 = names.value;
  var text2 = email.value;
  var text3 = password.value;
  if(text1 != "" && text2 != "" && text3 != ""){
  wordnap.classList.add("removepapertext");
  names.classList.add("removepapertext");
  email.classList.add("removepapertext");
  password.classList.add("removepapertext");
  terms.classList.add("removepapertext");
  termsa.classList.add("removepapertext");
  signBT.classList.add("removepapertext");
  s1button.style.color = "transparent";
  s1button.style.cursor = "default";
  navlogin.style.color = "transparent";
  navovlogin.style.color = "transparent";
  setTimeout(function(){
    check.classList.add("wordNapANNA");
  }, 2000);
}else{
  signBT.style.backgroundColor = "#eb2a15";
  signBT.style.color = "#ffffff";
  setTimeout(function(){
    signBT.style.backgroundColor = "#3bd46e";
    signBT.style.color = "#ffffff";
  }, 400);
}
});





//const circle = document.querySelector('.circle');

document.addEventListener('mousemove', e =>{
     circle.setAttribute("style", "top:"+(e.pageY-scrollY)+"px; left: "+(e.pageX)+"px;");
});