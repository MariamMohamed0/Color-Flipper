const colors=["green","red", "rgba(133,122,200)", "#f15025"];
var btn=document.querySelector(".btn");
var color=document.querySelector(".color");
btn.addEventListener("click",function(){
    const random=getRandomNumber();
    document.body.style.backgroundColor=colors[random];
    color.textContent=colors[random];
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}