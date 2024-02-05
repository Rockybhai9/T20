// Alert Box JavaScript Start
window.onload = function() {
    showAlert();
  }
  
  function showAlert() {
    document.getElementById('customAlert').style.display = 'block';
  }
  
  function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
  }

function openFullScreen() {
    document.getElementById('customAlert').style.display = 'none';
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { 
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      elem.msRequestFullscreen();
    }
}
// Alert Box JavaScript End


// disable developer mode js Start
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        e.preventDefault(); 
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        e.preventDefault(); 
    }
});
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); 
});
// disable developer mode js End


// Chnage nav background color js Start
function changeBg(){
    var navbar = document.getElementById('nav-bar');
    var scrollValue = window.scrollY;
    if(scrollValue < 250){
        navbar.classList.remove('bgColor');
    }
    else{
        navbar.classList.add('bgColor')
    }
}
window.addEventListener('scroll', changeBg);

// Chnage nav background color js End


// change in title js start
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "T20 Warld Cup";
            favicon.href = "image/trophy.png";
        }
        else {
            document.title = "Come Back To My WebPage";
            favicon.href = "image/please.png";
        }
});
// change in title js End



// Add some animation js start

window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 40;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
// Add some animation js End



// pre-loader js Start
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});
// pre-loader js End