const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function(){
    counter++;
    myFunction();
});

prevBtn.addEventListener("click", function(){
    counter--;
    myFunction();
});

function myFunction() {

    //working with slides
    // if( counter == slides.length) {
    //     counter = 0;
    // }

    // if(counter < 0) {
    //     counter = slides.length - 1;
    // }

    // working with buttons 
    if ( counter < slides.length - 1) {
        nextBtn.style.display = "block";
    }

    else {
        nextBtn.style.display = "none";
    }

    if (counter > 0) {
        prevBtn.style.display = " block ";
    }

    else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function(slide){
    slide.style.transform = `translate(-${counter * 100}%)`;
    });
}

prevBtn.style.display = "none";