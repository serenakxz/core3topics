
var tabTwo=document.querySelector("#tab-two");
tabTwo.addEventListener("click", function comingSoon() {
    alert("Please visit the LinkedIn Page https://www.linkedin.com/in/kexuan-zhang-a08667146")});


var modal = document.getElementById("myModal");
var closeIcon = document.getElementsByClassName("close")[0];
var tabFour=document.querySelector("#tab-four");
tabFour.addEventListener("click", function showModal() {
    modal.style.display = "block";
});

closeIcon.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }  

function changeColor(color) { 
    document.body.style.background = color; 
} 


function noShadow() {
    document.getElementById("demo1").style.textShadow = "0px 0px";
    document.getElementById("demo2").style.textShadow = "0px 0px";
    document.getElementById("demo3").style.textShadow = "0px 0px";
}

function reShadow() {
  document.getElementById("demo1").style.textShadow = "2px 2px 1px";
  document.getElementById("demo2").style.textShadow = "2px 2px 1px";
  document.getElementById("demo3").style.textShadow = "2px 2px 1px";
}

var allImg = document.getElementsByTagName("span");
function showImg(){
  var i;
for (i = 0; i <allImg .length; i++) {
   allImg[i].style.display = 'inline';
}
}

function hideImg(){
  var i;
for (i = 0; i <allImg .length; i++) {
    allImg[i].style.display = 'none';
}
}


var highLight = document.getElementsByClassName("highlight");
console.log(allImg);
console.log(highLight);


highLight[0].onmouseover = function() {mouseOver()};
highLight[0].onmouseout = function() {mouseOut()};
function mouseOver() {
  allImg[0].style.display="inline";
}
function mouseOut() {
  allImg[0].style.display = "none";
}

highLight[1].onmouseover = function() {mouseOver1()};
highLight[1].onmouseout = function() {mouseOut1()};
function mouseOver1() {
  allImg[1].style.display="inline";
}
function mouseOut1() {
  allImg[1].style.display = "none";
}

highLight[2].onmouseover = function() {mouseOver2()};
highLight[2].onmouseout = function() {mouseOut2()};
function mouseOver2() {
  allImg[2].style.display="inline";
}
function mouseOut2() {
  allImg[2].style.display = "none";
}

highLight[3].onmouseover = function() {mouseOver3()};
highLight[3].onmouseout = function() {mouseOut3()};
function mouseOver3() {
  allImg[3].style.display="inline";
}
function mouseOut3() {
  allImg[3].style.display = "none";
}

highLight[4].onmouseover = function() {mouseOver4()};
highLight[4].onmouseout = function() {mouseOut4()};
function mouseOver4() {
  allImg[4].style.display="inline";
}
function mouseOut4() {
  allImg[4].style.display = "none";
}

highLight[5].onmouseover = function() {mouseOver5()};
highLight[5].onmouseout = function() {mouseOut5()};
function mouseOver5() {
  allImg[5].style.display="inline";
}
function mouseOut5() {
  allImg[5].style.display = "none";
}

highLight[6].onmouseover = function() {mouseOver6()};
highLight[6].onmouseout = function() {mouseOut6()};
function mouseOver6() {
  allImg[6].style.display="inline";
}
function mouseOut6() {
  allImg[6].style.display = "none";
}

highLight[7].onmouseover = function() {mouseOver7()};
highLight[7].onmouseout = function() {mouseOut7()};
function mouseOver7() {
  allImg[7].style.display="inline";
}
function mouseOut7() {
  allImg[7].style.display = "none";
}

highLight[8].onmouseover = function() {mouseOver8()};
highLight[8].onmouseout = function() {mouseOut8()};
function mouseOver8() {
  allImg[8].style.display="inline";
}
function mouseOut8() {
  allImg[8].style.display = "none";
}

highLight[9].onmouseover = function() {mouseOver9()};
highLight[9].onmouseout = function() {mouseOut9()};
function mouseOver9() {
  allImg[9].style.display="inline";
}
function mouseOut9() {
  allImg[9].style.display = "none";
}

highLight[10].onmouseover = function() {mouseOver10()};
highLight[10].onmouseout = function() {mouseOut10()};
function mouseOver10() {
  allImg[10].style.display="inline";
}
function mouseOut10() {
  allImg[10].style.display = "none";
}


highLight[11].onmouseover = function() {mouseOver11()};
highLight[11].onmouseout = function() {mouseOut11()};
function mouseOver11() {
  allImg[11].style.display="inline";
}
function mouseOut11() {
  allImg[11].style.display = "none";
}

highLight[12].onmouseover = function() {mouseOver12()};
highLight[12].onmouseout = function() {mouseOut12()};
function mouseOver12() {
  allImg[12].style.display="inline";
}
function mouseOut12() {
  allImg[12].style.display = "none";
}

highLight[13].onmouseover = function() {mouseOver13()};
highLight[13].onmouseout = function() {mouseOut13()};
function mouseOver13() {
  allImg[13].style.display="inline";
}
function mouseOut13() {
  allImg[13].style.display = "none";
}

var links = document.getElementsByTagName("a")

function disableHover(){
  var i;
  for (i = 0; i <links .length; i++) {
 links[i].classList.remove("highlight");
}
}

function enableHover(){
  var i;
  for (i = 0; i <links .length; i++) {
 links[i].classList.add("highlight");
}
}



function NaviChangeColor(color2) {
  document.body.style.color = color2;
}

 function gfg_Run() { 
  noShadow();
  changeColor('#FFFFFF'); 
  NaviChangeColor('#121212');
  showImg();
  //disableHover();
  
}


var tabOne=document.querySelector("#tab-one");
tabOne.addEventListener("click", function backHome() {
  window.open("index.html")});

var demoOne=document.querySelector("#demo1");
demoOne.addEventListener("click", function openEditorial() {
  window.open("Editorial.html");
});


/*var timesClicked = 0;

$("#button1").click(function gfg_Run() {
    timesClicked++;

    if (timesClickednum % 2 == 0) {
      noShadow();
      changeColor('#5C544A'); 
    } else {
      changeColor('#FFFCDF');
    }
})  */     

var button = document.querySelectorAll("button")[0];
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
    changeColor('#121212');
    reShadow();
    NaviChangeColor('#ffffff');
    hideImg();
   // enableHover();
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);




