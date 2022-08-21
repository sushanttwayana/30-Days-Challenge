//MDN
// The DOMContentLoaded event fires when the initial HTML has been
// completed loaded and parsed without waiting for the StyleSheets, 
// images and subframes to finish loading. 
// The load event is fired when the whole page has loaded,
// including all the dependent resources such as 
// StyleSheet and images

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }

    else {
        btn.classList.remove("slide");
        video.play();
    }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
});
