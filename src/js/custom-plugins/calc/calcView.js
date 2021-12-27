let timerOpen = document.getElementById('clickToHideTimer');
let calcOpen = document.getElementById('clickToHideCalc');
calcOpen.addEventListener("click", calcView);
function calcView() {
    let timer = document.getElementById('hiddenElem');
    let calc = document.getElementById('calcDate');
    timer.style.display = "none";
    calc.style.display = "block"
    calcOpen.style.display = "none";
    timerOpen.style.display = "block";
}