const reviews = [
    {
        id: 1,
        name: "Monkey D Luffy",
        post: "Captain",
        img: "./images/luffy.jpg",
        text: "Being alone is more painful than getting hurt.       No matter how hard or impossible it is, never lose sight of your goal.",
    },
    {
        id: 2,
        name: "Roronoa Zoro",
        post: "Swordsman",
        img: "./images/zoro.jpg",
        text:" When the world shoves you around, you just gotta stand up and shove back. It’s not like somebody’s gonna save you if you start babbling excuses.",  
    },
    {
        id: 3,
        name: "Vinsmoke Sanji",
        post: "Cook",
        img: "./images/sanji.jpg",
        text: "A real man is someone who forgives a woman for her lies! . No matter how hard or impossible it is, never lose sight of your goal.",
    },
    {
        id: 4,
        name: "God Ussop",
        post: "Sniper",
        img: "./images/ussop.jpg",
        text: "Protecting what we cherish most as men is the reason why we formed this pirate crew!",
    },
    {
        id: 5,
        name: "Nami",
        post: "Navigator",
        img: "./images/nami.jpg",
        text: "Life is like a pencil that will surely run out, but will leave the beautiful writing of life.",
    },
    {
        id: 6,
        name: "Tony Tony Chopper",
        post: "Doctor",
        img: "./images/chopper.jpg",
        text: "I realized that back then, the reason I wanted to become human, was that I really just wanted to have friends.Now, I just want to be a monster that can help Luffy.",
    },
    {
        id: 7,
        name: "Nico Robin",
        post: "Archeologist",
        img: "./images/nico robin.jpg",
        text: "Sometimes the only thing you have to doubt is your own common sense.",
    },
    {
        id: 8,
        name: "Cyborg Franky",
        post: "Shipwright",
        img: "./images/franky.jpg",
        text: "But no matter what kind of weapons you may hold, just being alive isn't a sin!",
    },
    {
        id: 9,
        name: "SoulKing Brook",
        post: "Musician",
        img: "./images/brook1.jpg",
        text: "What do you know of death? Have you ever died? You think death will preserve your cause forever?Ridiculous! Death leaves nothing behind!",
    },
    {
        id: 10,
        name: "Jinbei",
        post: "Fishman",
        img: "./images/jinbei.jpg",
        text: "It may be hard right now… But you must silence those thoughts! Stop counting only those things that you have lost! What is gone, is gone!",
    },
    {
        id: 11,
        name: "Whitebeard",
        post: "The Strongest Man",
        img: "./images/whitebeard.jpg",
        text: "ONE PIECE DOES EXIST!!!!!",
    },
    {
        id: 12,
        name: "Gol D Roger",
        post: "The Priate King",
        img: "./images/gol.jpg",
        text: "Haha......Do you know what the marines call me these days???----Gold Roger",
    },

];

//select items
const img = document.getElementById("person1");
const author = document.getElementById("author");
const post = document.getElementById("post");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".clickme");

// startingitem
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
    // img.src = reviews[currentItem].img;

    // const item = reviews[currentItem];
    // img.src = item.img;
    // author.textContent = item.name;
    // post.textContent = item.post;
    // info.textContent = item.text;

    showPerson(currentItem);
});

// show person based on item

function showPerson(person) {

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    post.textContent = item.post;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function() {
    currentItem++;

    if(currentItem > reviews.length -1)
    {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show previous button
prevBtn.addEventListener("click", function() {
    currentItem--;

    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);
});

//show next person when click me
randomBtn.addEventListener("click", function (){
  
    currentItem =  Math.floor(Math.random() * reviews.length);
    // console.log(currentItem);
    showPerson(currentItem);
});