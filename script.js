let resetbtn=document.querySelector(".restart");
let stone=document.querySelector("#stone");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let objects=document.querySelectorAll(".objects");
let yourScore=document.querySelector("#your-score");
let draw=document.querySelector("#draw");
let compScore=document.querySelector("#comp-score");
let message=document.querySelector(".yourturn");

resetbtn.addEventListener("click",()=>{
    location.reload();
})
 
/*objects.forEach((object)=>{
    object.addEventListener("click",animated);
})
function animated(event){

    event.target.classList.remove("animate");
    void event.target.offsetWidth;
    event.target.classList.add("animate");
}
*/
let userchoice=0;
let compchoice=0;
arr=["stone","paper","scissor"];

objects.forEach((object)=>{
    object.addEventListener("click",works)
})


function works(event){
    event.target.classList.remove("animate");
    void event.target.offsetWidth;
    event.target.classList.add("animate");
    userchoice=event.target.getAttribute("Id");
    console.log(userchoice);
    console.log(getcompchoice());
    logic();
    
    
}

const getcompchoice=()=>{
    // console.log("hello");
    let x=Math.floor(Math.random()*3);
    // console.log(x);
    compchoice=arr[x];
    return compchoice;
}

const logic=()=>{
    if(userchoice===compchoice)draw.innerText++;
    else if(userchoice==="stone"){
        if(compchoice==="paper"){
            compScore.innerText++;
        }
        else{
            yourScore.innerText++;
        }
    }
    else if(userchoice==="paper"){
        if(compchoice==="stone"){
            yourScore.innerText++;
        }
        else{
            compScore.innerText++;
        }
    }
    else if(userchoice==="scissor"){
        if(compchoice==="stone"){
            compScore.innerText++;
        }
        else{
            yourScore.innerText++;
        }
    }

}


