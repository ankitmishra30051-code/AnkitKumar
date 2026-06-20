// let head = document.getElementById("heading")
// // document.getElementsByClassName("para")
// console.log(head)
// // alert("hello")
// let cls = document.getElementsByClassName("para")
// console.log(cls[1])
let head = document.createElement("h2")
head.innerText = "Welcome"
document.body.appendChild(head)
let stl = document.getElementById("heading")
stl.style.backgroundColor = "red";
stl.style.color = "white";
let resume = document.getElementById("btn");
resume.addEventListener("click", function(){
     window.open("res.pdf")   
     alert("hyy")
})
let project = document.getElementById("project");
project.addEventListener("click", function(){
    window.open("https://www.bing.com/search?q=gfg&form=ANNTH1&refig=6a350b85f8c740698afb5d497c6fc26e&pc=LCTS")
})