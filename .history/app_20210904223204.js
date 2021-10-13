console.log(hours)

setInterval(function() {

    second.style.transform = ` rotate(${seconds*6}deg)`;
    minute.style.transform = `rotate(${minutes*6}deg)`;
    hour.style.transform = `rotate(${30*hours}deg)`;

}, 3000)