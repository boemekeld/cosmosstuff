export class credentials {
    key: string = '7oCa6Pb04FodgOPT6YKZvlGQnh2SYcmKPlJcm9XC'
    url: string = ''
    getNasaCredentials(component: string,startDate?:string,endDate?:string,rover?:string) {
        if (component == 'apod') {
            this.url = 'https://api.nasa.gov/planetary/apod?api_key='
        }
        if (component == 'neows') {
            this.url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=`
        }
        if(component == 'mars-rovers'){
            this.url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${startDate}&api_key=`
        }
        return this.url + this.key;
    }
    getRandomApisCredentials(component:string, query:string[]){
        if(component == 'kepler-project'){
            this.url = `http://www.asterank.com/api/kepler?query={"TPLANET":{"$lt":${query[1]},"$gt":${query[0]}}}&limit=${query[2]}`
        }
        if(component == 'launches'){
            this.url = `https://ll.thespacedevs.com/2.2.0/launch/?limit=${query[0]}&offset=${query[1]}`
        }
        if(component == 'ufo-sightings'){
            this.url = `https://azure-westeurope-prod.socrata.com/resource/8s2t-pmzs.json?$limit=${query[0]}&$$app_token=KTHgvrHxa8rJbjJhcgmrO2Kyv`
        }
        return this.url;
    }

    getSpaceXCredentials(component:string){
        if(component == 'historical'){
            this.url = `https://api.spacexdata.com/v3/history`
        }
        if(component == 'dragons'){
            this.url = `https://api.spacexdata.com/v3/dragons`
        }
        return this.url;
    }
}