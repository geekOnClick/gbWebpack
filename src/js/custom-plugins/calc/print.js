const resultPar = document.getElementById('output');
function printError(errorText) {
    resultPar.innerHTML = `
    <span style="color: red">
    ${errorText}
    </span>
    `
}

function printDateDiff({ years, months, days }) {
    resultPar.innerHTML = `
    Годы: ${years}
    Месяцы: ${months}
    Дни:${days}
    `
}
export { printError, printDateDiff }