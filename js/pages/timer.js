import {
    printOutput
}
from "../utils/output.js";
import {
    printTimer, stopTimer
} from "../utils/output_timer.js";


const timerDate = document.getElementById("timerDate");
const stopTime = document.getElementById('stopTimer');

timerDate.onsubmit = (event) => {
    event.preventDefault();

    const {
        timeDate
    } = timerDate.elements

    if (!timeDate.value || isNaN(timeDate.value)) {
        printOutput("Заполните все поля")

        return;
    }

    printTimer(timeDate.value)
}

stopTime.onclick =()=>{
    
    stopTimer()
}