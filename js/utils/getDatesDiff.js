import {DateTime} from 'https://moment.github.io/luxon/es6/luxon.js';
export default (firstDate,secondDate) =>{
  if (firstDate < secondDate) {
    [firstDate, secondDate] = [secondDate,firstDate]
  }
  
  
  const fromDate = DateTime.fromISO(firstDate);
  const toDate = DateTime.fromISO(secondDate);
  
  const result = fromDate.diff(toDate, ['years', 'months', 'days']).toObject();
  console.log(DateTime.local().zoneName);
  return result;

}