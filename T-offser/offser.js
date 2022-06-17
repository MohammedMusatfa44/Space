
let cutdown = new Date("Dec 31,2022 23:59:59").getTime();

let count = setInterval(()=>{
    //time new
    let timee= new Date().getTime();
    let differint = cutdown - timee;

let days = Math.floor(differint / (1000*60*60*24))
let hours = Math.floor((differint % (1000*60*60*24)) / (1000*60*60))
let minutes = Math.floor((differint % (1000*60*60)) / (1000*60))
let seconds = Math.floor((differint % (1000*60)) / (1000))
console.log(days);
console.log(hours);
console.log(minutes);
console.log(seconds);
let day = document.querySelector(".days").innerHTML = days;
let hour = document.querySelector(".hours").innerHTML = hours ;
let minute = document.querySelector(".minutes").innerHTML = minutes; 
let second = document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;




},1000)
let cutdown2 = new Date("Oct 31,2022 23:59:59").getTime();

let count2 = setInterval(()=>{
    //time new
    let timee2= new Date().getTime();
    let differint2 = cutdown2 - timee2;

let days2 = Math.floor(differint2 / (1000*60*60*24))
let hours2 = Math.floor((differint2 % (1000*60*60*24)) / (1000*60*60))
let minutes2 = Math.floor((differint2 % (1000*60*60)) / (1000*60))
let seconds2 = Math.floor((differint2 % (1000*60)) / (1000))

let day2 = document.querySelector(".days2").innerHTML = days2;
let hour2 = document.querySelector(".hours2").innerHTML = hours2 ;
let minute2 = document.querySelector(".minutes2").innerHTML = minutes2; 
let second2 = document.querySelector(".seconds2").innerHTML = seconds2 < 10 ? `0${seconds2}`: seconds2;




},1000)