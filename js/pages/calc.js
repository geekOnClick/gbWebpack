import {printDatesDiff } from "../utils/output_calc.js";
import { printOutput} from "../utils/output.js";
import getDatesDiff from "../utils/getDatesDiff.js";

const form = document.getElementById("calcDate")

form.onsubmit = (event)=>{
    event.preventDefault();// предотвращает действия браузера по умолчанию 
    const formData= new FormData(form);
    const firstDate = formData.get("firstDate");
     const secondDate = formData.get("secondDate");
    // const {firstDate, secondDate} = form.elements;
    // firstDate = firstDate.value,secondDate=secondDate.value;

    if (!firstDate || !secondDate) {
        printOutput("Заполните все поля")

        return;
    }
    

    // if (!firstDate.value || !secondDate.value){
    //     printOutput ("Заполните все поля")

    //     return ;
    // }

   const dateDiff = getDatesDiff(firstDate, secondDate);
// const dateDiff = getDatesDiff({from: firstDate.value, to: secondDate.value}); 

printDatesDiff(dateDiff)
} 






