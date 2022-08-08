
// using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach( function(question) {  //any === question
    // console.log(any);
    const btn = question.querySelector(".btns"); // document haina document le purai page lai nai search garxa
    // console.log("btn");

    btn.addEventListener("click", function() {

        question.classList.toggle("show-text");

        questions.forEach(function(items) {
            // console.log(items);

            if(items !== question ){
                items.classList.remove("show-text");            }
        });

        
    })
});

//traversing the dom
// const btns = document.querySelectorAll(".btns");

// btns.forEach( function (btn) {
//     btn.addEventListener("click", function(e) {
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const parent = e.currentTarget.parentElement.parentElement;

//         parent.classList.toggle("show-text");
//     });
// });