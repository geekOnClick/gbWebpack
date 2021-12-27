import { DateTime } from './luxon.js'

export default (dateFrom, dateTo) => {
    if (dateTo < dateFrom) {
        [dateTo, dateFrom] = [dateFrom, dateTo]
    }
    const dateFromObj = DateTime.fromISO(dateFrom);
    const dateToObj = DateTime.fromISO(dateTo)
    const diff = dateToObj.diff(dateFromObj, ['years', 'months', 'days']).toObject()
    return diff
}