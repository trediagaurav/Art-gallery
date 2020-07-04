let submit = document.getElementsByTagName("button")[0];

submit.addEventListener("click",function(){
    alert("congratulations !!! Payment Successful...");
})

submit.addEventListener("mouseover",function(){
    submit.style.backgroundColor=("green");
})

submit.addEventListener("mouseleave",function(){
    submit.style.backgroundColor=("red");
})