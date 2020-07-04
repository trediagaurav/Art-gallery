let register = document.getElementById("register");
register.addEventListener("mouseenter", function(){
    register.style.backgroundColor = "green";
})
register.addEventListener("mouseleave", function(){
    register.style.backgroundColor = "white";
})
register.addEventListener("click", function(){
        alert("You are registered successfully !!!")
})

let reset = document.getElementById("reset");
reset.addEventListener("mouseenter", function(){
    reset.style.backgroundColor = "red";
})
reset.addEventListener("mouseleave", function(){
    reset.style.backgroundColor = "white";
})
let subscribe = document.getElementById("subscribe");
subscribe.addEventListener("mouseenter", function(){
    subscribe.style.backgroundColor = "rgb(27, 169, 235)";
})
subscribe.addEventListener("mouseleave", function(){
    subscribe.style.backgroundColor = "white";
})

function contact(){
    prompt("Please type your phone number below, will contact you back. Thank you");
}