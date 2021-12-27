let timerOpen = document.getElementById('clickToHideTimer');
let calcOpen = document.getElementById('clickToHideCalc');
timerOpen.addEventListener("click", timerView)

function timerView() {
    let timer = document.getElementById('hiddenElem');
    let calc = document.getElementById('calcDate');
    timer.style.display = "block";
    calc.style.display = "none";
    timerOpen.style.display = "none";
    calcOpen.style.display = "block"
}

