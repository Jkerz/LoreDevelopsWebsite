var mobile = /Mobi|Android/i.test(navigator.userAgent);
var skills = document.getElementsByClassName("skill");

if(!mobile){
  for(var i=0; i<skills.length;i++){
    document.getElementsByClassName("fill")[i].style.width = "0";
  }
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo(0, 0);
}

// Scroll to About
function scrollToAbout() {
  var scroll = document.getElementById("about").offsetTop - 75;
  window.scrollTo(0, scroll);
}

// Scroll to Projects
function scrollToProjects() {
  var scroll = document.getElementById("projects").offsetTop - 75;
  window.scrollTo(0, scroll);
}

// Scroll to Contact
function scrollToContact() {
  var scroll = document.getElementById("contact").offsetTop - 75;
  window.scrollTo(0, scroll);
  clearActiveClass();
  document.getElementById("contact-nav").className = "active";
}

// Clears active classes from all navbar elements
function clearActiveClass() {
  document.getElementsByClassName("active")[0].className = "";
}


function closeModal(event){
  event.currentTarget.parentNode.parentNode.style.display = "none";
}

function openModal(event){
  event.target.nextElementSibling.style.display = "flex";
}

var closeBG = document.getElementsByClassName("modal-bg");
var closeX = document.getElementsByClassName("close");
var box = document.getElementsByClassName("box");
for(var i = 0; i < box.length; i++){
  box[i].getElementsByTagName("img")[0].addEventListener("click", openModal);
  closeBG[i].addEventListener("click", closeModal);
  closeX[i].addEventListener("click", closeModal);
}

//////////////////////////////////////////////////////////////////////
// This function controls navbar hiding on scroll and highlighting //
//////////////////////////////////////////////////////////////////////
var done = true;
var prevScroll = window.pageYOffset;
window.onscroll = function () {
  var pos = window.pageYOffset;
  var about_location = document.getElementById("about").offsetTop;
  var projects_location = document.getElementById("projects").offsetTop;
  var contact_location = document.getElementById("contact").offsetTop;
  ///////////////////////////////////////////////////////////////////////////
  // Hides the navbar when scrolling down and brings it back scrolling up //
  //////////////////////////////////////////////////////////////////////////
  if(mobile) { // Only mobile
    if (prevScroll > pos) {
      document.getElementsByClassName("hero")[0].style.top = "0";
    } else {
      document.getElementsByClassName("hero")[0].style.top = "-50px";
    }
    prevScroll = pos;
  }

  ////////////////////////////////////////////////
  // Highlights the appropriate navbar element //
  ///////////////////////////////////////////////
  if(pos < about_location - 300) {
    clearActiveClass(); // Clear previous highlight
    document.getElementById("home-nav").className = "active"; //Add active class
  }  // Else if user is looking at about, highlight about navbar
  else if(pos < projects_location - 300) {
    clearActiveClass();
    document.getElementById("about-nav").className = "active";
  } // Else if user is looking at projects, highlight projects navbar
  else if(pos < contact_location - 300) {
    clearActiveClass();
    document.getElementById("projects-nav").className = "active";
  } // Else highlight contact navbar
  else {
    clearActiveClass();
    document.getElementById("contact-nav").className = "active";
  }

  console.log
  if(done && pos > about_location - 76 && pos < projects_location && !mobile){
    var perct = [95, 85, 75, 60, 40, 30, 80, 70, 60, 95, 80, 75, 60];
    for(var i=0; i < perct.length; i++){
      document.getElementsByClassName("fill")[i].style.width = ''+perct[i]+'%';
    }
    done = false;
  }
};
