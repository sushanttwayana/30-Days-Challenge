var increment = 30;

for (var i = 0; i<11 ;i++) {
    var w = i * increment;
    var hours = document.querySelectorAll(".hours");
    var s = (hours[i].style.transform = "rotate(" + w + "deg)");
}

var timing = setInterval (time, 1000);