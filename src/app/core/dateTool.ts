export class dateTool{
    getCurrentDate(): string {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let date;
        date = yyyy + '-' + mm + '-' + dd;
        return date.toString();
    }

    getFullDateInformation(){
        var localeDateTime = (new Date()).toLocaleString();
        return localeDateTime;
    }

    getMinutesBetweenDates(startDate:any, endDate:any) {
        const minutes = Math.abs(endDate - startDate) / (1000 * 60) % 60;
        return minutes;
    }
}