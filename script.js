var button = document.getElementById("hi")
var body = document.body;
var clickCount = 0; 
button.addEventListener("click" , function(){
console.log("click!");
clickCount++;
body.setAttribute("style", "background-color: black; color: white");
})
