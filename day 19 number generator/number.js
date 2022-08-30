// iterate over and log each span
// setInterval() method calls a function at specified intervals
//The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
// 1 second = 1000 milliseconds.
const items = [...document.querySelectorAll('.number')];

//accept el as argument
const updateCount = (el) => { 
    // invoke and pass each span el in iteration
    const value = parseInt(el.dataset.id);
    // console.log(value);
    const increment = Math.ceil(value/1000); //jati increment badhyo teti fast display hunxa
    // console.log(increment)
    let initialValue = 0;

    const increaseCount = setInterval(() => {
        
        initialValue += increment;
        // console.log(initialValue)
        if( initialValue > value) {
            el.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }

        el.textContent =`${initialValue}`;

        // console.log(increaseCount);
    }, 1);
    

};

items.forEach((item) => {
    updateCount(item);
});

