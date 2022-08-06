export class credentials {
    key: string = '7oCa6Pb04FodgOPT6YKZvlGQnh2SYcmKPlJcm9XC'
    url: string = ''
    startDate:string = ''
    endDate:string = ''
    getCredentials(component: string,startDate?:string,endDate?:string) {
        if (component == 'apod') {
            this.url = 'https://api.nasa.gov/planetary/apod?api_key='
        }
        if (component == 'neows') {
            this.url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=`
        }
        return this.url + this.key;
    }
}