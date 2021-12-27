import timerSound from '../../sound/Gong.mp3';
import { Howl, Howler } from 'howler';

let timerInput = document.getElementById("time");
let buttonStart = document.getElementById("start");
let timerShow = document.getElementById("timer");
let stopTimer = document.getElementById("stop");
let timer;

stopTimer.addEventListener('click', stopTime);
function stopTime() {
    clearInterval(timer);
}

buttonStart.addEventListener('click', function () {
    let timeMinut = parseInt(timerInput.value) * 60;
    timer = setInterval(function () {
        let seconds = timeMinut % 60
        let minutes = timeMinut / 60 % 60
        let hour = timeMinut / 60 / 60 % 60

        let strTimer = `${Math.trunc(hour)} - час: ${Math.trunc(minutes)} - мин: ${seconds} - сек`;
        timerShow.innerHTML = strTimer;


        if (timeMinut <= 0) {
            clearInterval(timer);
            const sound = new Howl({
                src: [timerSound],
                volume: 0.8

            });

            sound.play();

        }
        --timeMinut;
    }, 1000)

    if (timerInput.value !== '') {
    } else {
        timerInput.value = 'Введите время'
        return clearInterval(timer)

    }

})
