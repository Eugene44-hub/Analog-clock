let second, hour, minute, date;

second = document.querySelector('.second');
hour = document.querySelector('.hour');
minute = document.querySelector('.minute');
date = new Date();
seconds = date.getSeconds();
hours = date.getHours()

console.log(seconds * 6)
second.style.transform = ` rotate(${seconds*6}deg)`;