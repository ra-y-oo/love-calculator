
let loveScore = Math.random();
loveScore = Math.floor((loveScore* 100)+1);

document.querySelector(".btn").addEventListener("click", function(){    
    let name1 = prompt("What's your name?");
    let name2 = prompt("What is their name?");
    document.querySelector("h1").innerHTML = name1 + " and "+ name2 +" love score is "+loveScore+ "%"
})