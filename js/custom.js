"use strict";

var toggles = document.querySelectorAll(".c-hamburger");

for (var i = toggles.length - 1; i >= 0; i--) {
 var toggle = toggles[i];
 toggleHandler(toggle);
};

// Toggle handler on click of navbar open and close
function toggleHandler(toggle) {
 toggle.addEventListener( "click", function(e) {
   e.preventDefault();
   (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("");
   $(".social").hide();                                                                                                            
 });
}
$(".c-hamburger--htra open").on('click', openNav);
$(".closebtn").on('click', closeNav);
// Open navbar
function openNav() {
  document.getElementById("mySidenav").style.width = "225px";
  document.getElementById("curve").style.marginRight = "225px";
  document.getElementById("right-curve").style.marginRight = "225px";
  document.getElementById("right-curve").style.transition = "0.5s";
  document.getElementById("logo").style.opacity = "0";
  
  // $(".twelve").css('opacity', '0.5');    
  if($(window).width() <= 490){
    $(".twelve").css('opacity', '0.5');
  }
  else{
    $(".twelve").animate({width: '90%'}, 50);
    $(".homepage-content").css('width', '90%');
  }
  $("#social").css('opacity', '1');
}

// Close navbar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("curve").style.marginRight= "0";
  document.getElementById("logo").style.opacity = "1";
  document.getElementById("right-curve").style.marginRight = "0";        
  $(".twelve").css('opacity', '1');
  $(".twelve").css('width', '100%');
  $(".homepage-content").css('width', '80%');
  if($(window).width() <= 490){
     $("#social").css('opacity', '0');
  }
}

$(document).ready(function(){
  // Code to hide all other divs until animation loads
  if(document.location.hash === ""){
    $("#logodiv, .Weoperate, img, .mainheader, .Undertable, .set-appointment, #social, .show-next-page, .c-hamburger").hide().delay(4200).fadeIn(1000);
    setTimeout(function(){}, 4000); 
  }
  $(".twelve").on('click', function(){
    if($(".mySidenav").is(":visible")){
      closeNav();
    }
  });
});