import * as moment from "moment";

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

    getYesteday(){
        let today = new Date();
        let dd = String(today.getDate() - 1).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let date;
        date = yyyy + '-' + mm + '-' + dd;
        return date.toString();
    }

    getRandomDate() {
        let from = new Date('2020-01-01T01:57:45.271Z')
        let to = new Date('2022-10-01T01:57:45.271Z')
        const fromTime = from.getTime();
        const toTime = to.getTime();
        return new Date(fromTime + Math.random() * (toTime - fromTime)).toISOString();
    }

    getFullDateInformation(){
        var localeDateTime = (new Date()).toLocaleString();
        return localeDateTime;
    }

    getMinutesBetweenDates(startDate:any, endDate:any) {
        const minutes = Math.abs(endDate - startDate) / (1000 * 60) % 60;
        var diff = Math.abs(Date.parse(startDate) - Date.parse(endDate));
        return minutes;
    }
}