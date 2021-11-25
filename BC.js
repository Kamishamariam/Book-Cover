const colors = ["wheat","#f15025", "yellow","orange","purple", "blue","green","thistle","pink","brown","maroon","magenta","cyan","purple-violet","red","grey","jade","crimson","salmon","greenyellow","khaki","teal","blueviolet","coral","chartreuse","darkolivegreen","fuchsia","lightgreen","gold","indigo","navy","peru","palegreen","royalblue","sienna","sandybrown","turquoise","tomato","cornflowerblue"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

//get random number 0-40
btn.addEventListener("click", function(){
const randomNumber = getrandomNumber();
console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getrandomNumber(){
    return Math.floor(Math.random() * colors.length);
}