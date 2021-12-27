
import {
    printOutput
} from "./output.js";

export let time;
let strTimer;
export const printTimer = (strong) => {
     
         let timeMinut = parseInt(strong);
         let seconds,minutes,hour;
         

        

    time = setInterval(function () {
      
        seconds = timeMinut % 60
        minutes = timeMinut / 60 % 60
        hour = timeMinut / 60 / 60 % 60
        
         
        if (timeMinut <= 0) {
            clearInterval(time)
            printOutput(`
         Таймер остановлен
       
    `)
            soundFinish();
        } else {
            strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            
             
            printOutput(`
         Осталось до конца: ${strTimer}`)
        }
        --timeMinut;

        
    }, 1000);

    

}

function soundFinish() {
    var audio = new Audio();
    audio.src = './js/click.mp3';
    audio.autoplay = true;
}



export const stopTimer = () => {
    
        clearInterval(time);
        printOutput(`
         Таймер остановлен ${strTimer}`)
    
}

