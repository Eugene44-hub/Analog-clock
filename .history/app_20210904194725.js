let second, hour, minute, date;

second = document.querySelector('.second');
hour = document.querySelector('.hour');
minute = document.querySelector('.minute');
date = new Date();
seconds = date.getSeconds();
hours = date.getTime();
minutes = date.getMinutes();

console.log(hours)
second.style.transform = ` rotate(${seconds*6}deg)`;
minute.style.transform = `rotate(${minutes*6}deg)`;
hour.style.transform = ``