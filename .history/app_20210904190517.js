let second, hour, minute, date;

second = document.querySelector('.second');
hour = document.querySelector('.hour');
minute = document.querySelector('.minute');
date = new Date();
seconds = date.getSeconds();
console.log(date.getSeconds())

second.style.transform = 'rotate()'