import { printOutput} from "./output.js";

export const printDatesDiff =({years,months,days})=>{
    printOutput (`
        Дни: ${days},
        Месяцы:${months},
        Годы:${years},
    `)
    
}



