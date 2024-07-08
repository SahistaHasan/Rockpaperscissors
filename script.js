let avar = document.querySelector("#rock");
let avar2 = document.querySelector("#paper");
let avar3 = document.querySelector("#scissor");
let avar4 = document.querySelector("#container");
let avar5 = document.querySelector("#player");
let avar6 = document.querySelector("#comp");
let avar7 = document.querySelector("#status");
let comp;


avar.onclick = () => {
    avar7.innerHTML="";
comp = Math.floor(Math.random()*3);
avar5.style.backgroundImage="url('https://imsammylee.github.io/rock-paper-scissors/rock_image.png')";
if(comp===0){
avar6.style.backgroundImage="url('https://imsammylee.github.io/rock-paper-scissors/rock_image.png')";
avar7.innerHTML="DRAW!";
}
if(comp===1){
    avar6.style.backgroundImage="url('https://husseinhewehii.github.io/Rock_Paper_Scissors/paper.png')";
    avar7.innerHTML="YOU LOSE!";
}
if(comp===2){
    avar6.style.backgroundImage="url('https://imsammylee.github.io/rock-paper-scissors/scissors_image.png')";
    avar7.innerHTML="YOU WIN!";
}

}

avar2.onclick = () => {
    avar7.innerHTML="";
    comp = Math.floor(Math.random()*3);
    avar5.style.backgroundImage="url('https://husseinhewehii.github.io/Rock_Paper_Scissors/paper.png')";
    if(comp===0){
        avar6.style.backgroundImage="url('https://imsammylee.github.io/rock-paper-scissors/rock_image.png')";
        avar7.innerHTML="YOU WIN!";
        }
        if(comp===1){
            avar6.style.backgroundImage="url('https://husseinhewehii.github.io/Rock_Paper_Scissors/paper.png')";
            avar7.innerHTML="DRAW!";
        }
        if(comp===2){
            avar6.style.backgroundImage="url('https://imsammylee.github.io/rock-paper-scissors/scissors_image.png')";
            avar7.innerHTML="YOU LOSE!";
        }
        
    }

    avar3.onclick = () => {
        avar7.innerHTML="";
        comp = Math.floor(Math.random()*3);
        avar5.style.backgroundImage="url('https://imsammylee.github.io/rock-paper-scissors/scissors_image.png')";
        if(comp===0){
            avar6.style.backgroundImage="url('https://imsammylee.github.io/rock-paper-scissors/rock_image.png')";
            avar7.innerHTML="YOU LOSE!";
            }
            if(comp===1){
                avar6.style.backgroundImage="url('https://husseinhewehii.github.io/Rock_Paper_Scissors/paper.png')";
                avar7.innerHTML="YOU WIN!";
            }
            if(comp===2){
                avar6.style.backgroundImage="url('https://imsammylee.github.io/rock-paper-scissors/scissors_image.png')";
                avar7.innerHTML="DRAW!";
            }
        }
