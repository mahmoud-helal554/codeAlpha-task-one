let currentIndex=0;
let bullets=document.querySelectorAll(".bullets li");
let next=document.querySelector(".next");
let prev=document.querySelector(".prev")
let span=document.querySelector(".image span");
let images=document.querySelectorAll("img")

slide_content()
next.addEventListener("click",function(){
    if(currentIndex<8){
        currentIndex++;
        add_bulletClass();
        slide_content()
        image_sliding()
    }
   
})
prev.addEventListener("click",function(){
    if(currentIndex>0){
        currentIndex--;
        add_bulletClass()
        slide_content()
        image_sliding()
    }
   

})

function add_bulletClass(){

    for(let i=0;i<9;i++){
        bullets[i].classList.remove("on")
        if(i===currentIndex){
            bullets[i].className="on"
        }
    }
    
}
function slide_content(){
    span.innerHTML=`image #${currentIndex+1}`
}
function image_sliding(){
    for(let i=0;i<9;i++){
        images[i].classList.remove("active")
        if(i===currentIndex){
            images[i].className="active"
        }
    }
}



