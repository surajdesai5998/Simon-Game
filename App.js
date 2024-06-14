
let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){    //step1
    if(started==false){
        console.log('Game is Started');
    
        started=true;
        levelUp();
    }    
});


function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);
}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },350);
}


function levelUp(){    //step2
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`; 


    let randIdx= Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
   
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
   
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);

 }


function checkAns(idx) {
    // console.log("current level:",level);
    // let idx=level-1;

    if (userSeq[idx]===gameSeq[idx]) {
        // console.log("Same Value");
        if (userSeq.length===gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerText=` Game over! 
        Score: ${level-1}     
        Press any key to start.
        `;
        
          
        gameOver();
        reset();
        

    }
}


function btnPress(){
    let btn=this;
    // console.log(btn);
    userFlash(btn);

    userColor=btn.getAttribute("id");
    // console.log(userColor)
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


function gameOver(){
    let body=document.querySelector('body');
    body.classList.add('red');
    setTimeout(function(){
        body.classList.remove("red");
    },550);

} 