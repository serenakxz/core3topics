
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



 function gfg_Run() { 
  noShadow();
  changeColor('#FFFFFF'); 
  NaviChangeColor('#121212');
}


var tabOne=document.querySelector("#tab-one");
tabOne.addEventListener("click", function backHome() {
  window.open("index.html")});

  function NaviChangeColor(color2) {
    document.body.style.color = color2;
  }

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
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);

var hoverImg = document.querySelector(".hover_img");
var highLight = document.getElementById("highlight");
console.log(highLight);
highLight.addEventListener("mouseenter", function showImg(){
  hoverImg.style.display = "block";
})


