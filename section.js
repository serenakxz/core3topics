var exhibitionMotion = document.getElementById("exhibition");
var mantraMotion = document.getElementById("mantra");
var wikiMotion = document.getElementById("wiki");
var manifestoMotion = document.getElementById("manifesto");
var readingMotion = document.getElementById("reading");

var exhibitionText = document.getElementById("exhibition_p");
var mantraText = document.getElementById("merch_p");
var wikiText = document.getElementById("wikibook_p");
var manifestoText = document.getElementById("manifesto_p");
var readingText = document.getElementById("poster_p");

function exhibition() {
  exhibitionMotion.style.zIndex = 1000;
  exhibitionMotion.style.opacity = "1";
  exhibitionMotion.style.width = "40vw";
  manifestoMotion.style.zIndex = 1;
  manifestoMotion.style.opacity = "0.8";
  manifestoMotion.style.width = "35vw";
  wikiMotion.style.zIndex = 1;
  wikiMotion.style.opacity = "0.8";
  wikiMotion.style.width = "35vw";
  mantraMotion.style.zIndex = 1;
  mantraMotion.style.opacity = "0.8";
  mantraMotion.style.width = "35vw";
  readingMotion.style.zIndex = 1;
  readingMotion.style.opacity = "0.8";
  readingMotion.style.width = "35vw";
  exhibitionText.style.opacity = "1";
  mantraText.style.opacity = "0.3";
  wikiText.style.opacity = "0.3";
  manifestoText.style.opacity = "0.3";
  readingText.style.opacity = "0.3";

}
function wikibook() {
  wikiMotion.style.zIndex = 1000;
  wikiMotion.style.opacity = "1";
  wikiMotion.style.width = "40vw";
  mantraMotion.style.zIndex = 1;
  mantraMotion.style.opacity = "0.8";
  mantraMotion.style.width = "35vw";
  exhibitionMotion.style.zIndex = 1;
  exhibitionMotion.style.opacity = "0.8";
  exhibitionMotion.style.width = "35vw";
  manifestoMotion.style.zIndex = 1;
  manifestoMotion.style.opacity = "0.8";
  manifestoMotion.style.width = "35vw";
  readingMotion.style.zIndex = 1;
  readingMotion.style.opacity = "0.8";
  readingMotion.style.width = "35vw";
  wikiText.style.opacity = "1";
  exhibitionText.style.opacity = "0.3";
  mantraText.style.opacity = "0.3";
  manifestoText.style.opacity = "0.3";
  readingText.style.opacity = "0.3";
}

function manifesto() {
  manifestoMotion.style.zIndex = 1000;
  manifestoMotion.style.opacity = "1";
  manifestoMotion.style.width = "40vw";
  exhibitionMotion.style.zIndex = 1;
  exhibitionMotion.style.opacity = "0.8";
  exhibitionMotion.style.width = "35vw";
  mantraMotion.style.zIndex = 1;
  mantraMotion.style.opacity = "0.8";
  mantraMotion.style.width = "35vw";
  wikiMotion.style.zIndex = 1;
  wikiMotion.style.opacity = "0.8";
  wikiMotion.style.width = "35vw";
  readingMotion.style.zIndex = 1;
  readingMotion.style.opacity = "0.8";
  readingMotion.style.width = "35vw";
  wikiText.style.opacity = "0.3";
  exhibitionText.style.opacity = "0.3";
  mantraText.style.opacity = "0.3";
  manifestoText.style.opacity = "1";
  readingText.style.opacity = "0.3";
}


function merch() {
  mantraMotion.style.zIndex = 1000;
  mantraMotion.style.opacity = "1";
  mantraMotion.style.width = "40vw";
  exhibitionMotion.style.zIndex = 1;
  exhibitionMotion.style.opacity = "0.8";
  exhibitionMotion.style.width = "35vw";
  manifestoMotion.style.zIndex = 1;
  manifestoMotion.style.opacity = "0.8";
  manifestoMotion.style.width = "35vw";
  wikiMotion.style.zIndex = 1;
  wikiMotion.style.opacity = "0.8";
  wikiMotion.style.width = "35vw";
  readingMotion.style.zIndex = 1;
  readingMotion.style.opacity = "0.8";
  readingMotion.style.width = "35vw";
  wikiText.style.opacity = "0.3";
  exhibitionText.style.opacity = "0.3";
  mantraText.style.opacity = "1";
  manifestoText.style.opacity = "0.3";
  readingText.style.opacity = "0.3";
}


function poster() {
  readingMotion.style.zIndex = 1000;
  readingMotion.style.opacity = "1";
  readingMotion.style.width = "40vw";
  exhibitionMotion.style.zIndex = 1;
  exhibitionMotion.style.opacity = "0.8";
  exhibitionMotion.style.width = "35vw";
  manifestoMotion.style.zIndex = 1;
  manifestoMotion.style.opacity = "0.8";
  manifestoMotion.style.width = "35vw";
  mantraMotion.style.zIndex = 1;
  mantraMotion.style.opacity = "0.8";
  mantraMotion.style.width = "35vw";
  wikiMotion.style.zIndex = 1;
  wikiMotion.style.opacity = "0.8";
  wikiMotion.style.width = "35vw";
  wikiText.style.opacity = "0.3";
  exhibitionText.style.opacity = "0.3";
  mantraText.style.opacity = "0.3";
  manifestoText.style.opacity = "0.3";
  readingText.style.opacity = "1";
}





// section for exhibitionMotion
exhibitionMotion.onmousedown = function (event) {

  let shiftX = event.clientX - exhibitionMotion.getBoundingClientRect().left;
  let shiftY = event.clientY - exhibitionMotion.getBoundingClientRect().top;

  exhibition();
  document.body.append(exhibitionMotion);

  moveAt(event.pageX, event.pageY);

  // moves the exhibitionMotion at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    exhibitionMotion.style.left = pageX - shiftX + 'px';
    exhibitionMotion.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the exhibitionMotion on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the exhibitionMotion, remove unneeded handlers
  exhibitionMotion.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    exhibitionMotion.onmouseup = null;
    exhibitionMotion.style.opacity = "80%";
    exhibitionMotion.style.width = "35vw";
  };

};

exhibitionMotion.ondragstart = function () {
  return false;
};



// section for wikiMotion
wikiMotion.onmousedown = function (event) {

  let shiftX = event.clientX - wikiMotion.getBoundingClientRect().left;
  let shiftY = event.clientY - wikiMotion.getBoundingClientRect().top;

  wikiMotion.style.position = 'absolute';
  wikibook();
  document.body.append(wikiMotion);

  moveAt(event.pageX, event.pageY);

  // moves the flowerMotion at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    wikiMotion.style.left = pageX - shiftX + 'px';
    wikiMotion.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the flowerMotion on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the flowerMotion, remove unneeded handlers
  wikiMotion.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    wikiMotion.onmouseup = null;
    wikiMotion.style.zIndex = 999;
    wikiMotion.style.opacity = "80%";
    wikiMotion.style.width = "35vw";
  };

};

wikiMotion.ondragstart = function () {
  return false;
};

// section for readingMotion
readingMotion.onmousedown = function (event) {

  let shiftX = event.clientX - readingMotion.getBoundingClientRect().left;
  let shiftY = event.clientY - readingMotion.getBoundingClientRect().top;

  readingMotion.style.position = 'absolute';
 poster();
  document.body.append(readingMotion);

  moveAt(event.pageX, event.pageY);

  // moves the exhibitionMotion at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    readingMotion.style.left = pageX - shiftX + 'px';
    readingMotion.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the exhibitionMotion on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the exhibitionMotion, remove unneeded handlers
  readingMotion.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    readingMotion.onmouseup = null;
    readingMotion.style.opacity = "80%";
    readingMotion.style.width = "35vw";
  };

};

readingMotion.ondragstart = function () {
  return false;
};

// section for mantraMotion
mantraMotion.onmousedown = function (event) {

  let shiftX = event.clientX - mantraMotion.getBoundingClientRect().left;
  let shiftY = event.clientY - mantraMotion.getBoundingClientRect().top;

  mantraMotion.style.position = 'absolute';
  merch();
  document.body.append(mantraMotion);

  moveAt(event.pageX, event.pageY);

  // moves the mantraMotion at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    mantraMotion.style.left = pageX - shiftX + 'px';
    mantraMotion.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the mantraMotion on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the mantraMotion, remove unneeded handlers
  mantraMotion.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    mantraMotion.onmouseup = null;
    wikiMotion.style.zIndex = 999;
    mantraMotion.style.opacity = "80%";
    mantraMotion.style.width = "35vw";
  };

};

mantraMotion.ondragstart = function () {
  return false;
};

// section for manifestoMotion
manifestoMotion.onmousedown = function (event) {

  let shiftX = event.clientX - manifestoMotion.getBoundingClientRect().left;
  let shiftY = event.clientY - manifestoMotion.getBoundingClientRect().top;

  manifestoMotion.style.position = 'absolute';
  manifesto();
  document.body.append(manifestoMotion);

  moveAt(event.pageX, event.pageY);

  // moves the exhibitionMotion at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    manifestoMotion.style.left = pageX - shiftX + 'px';
    manifestoMotion.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the exhibitionMotion on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the exhibitionMotion, remove unneeded handlers
  manifestoMotion.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    manifestoMotion.onmouseup = null;
    manifestoMotion.style.opacity = "80%";
    manifestoMotion.style.width = "35vw";
  };

};

manifestoMotion.ondragstart = function () {
  return false;
};