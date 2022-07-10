let slideIndex = 1;
/*showSlides(slideIndex);*/
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let mylet;



function plusSlides(n) {
  stopSlide();
  slideIndex += n;
  for(var i=0; i<slides.length; i++){
    slides[i].style.display='none';
    dots[i].className = dots[i].className.replace(" on", "");
  }
  if(slideIndex < 1) {slideIndex = slides.length;}
  if(slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += " on";
  /*showSlides(slideIndex += n);*/
}

function currentSlide(n) {
  /*showSlides(slideIndex = n);*/
  stopSlide();
  slideIndex = n;

  for(var i=0; i<slides.length; i++){
    slides[i].style.display='none';
    dots[i].className = dots[i].className.replace(" on", "");
  }

  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += " on";
}

function showSlides(){
    for(var i=0; i<slides.length; i++){
        slides[i].style.display='none';
        dots[i].className = dots[i].className.replace(" on", "");
    }
    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += " on";

    mylet = setTimeout(showSlides, 2000);
}

function stopSlide() {
    clearTimeout(mylet);
}

showSlides();
/*
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" on", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}*/