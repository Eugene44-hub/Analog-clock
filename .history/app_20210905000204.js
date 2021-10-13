setInterval(function() {
    let second, hour, minute, date;

    second = document.querySelector('.second');
    hour = document.querySelector('.hour');
    minute = document.querySelector('.minute');
    date = new Date();
    seconds = date.getSeconds();
    hours = date.getHours() - 12;
    minutes = date.getMinutes();
    day = date.getDay();
    console.log(d)

    second.style.transform = ` rotate(${seconds*6}deg)`;
    minute.style.transform = `rotate(${minutes*6}deg)`;
    hour.style.transform = `rotate(${30*hours}deg)`;

}, Infinity)