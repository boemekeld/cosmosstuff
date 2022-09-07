export class cssVecna{
    changeColourPalette(
        dark:string,darkPurple:string,softPurple:string,screamingPurple:string){
        let root = document.documentElement
        root.style.setProperty('--dark',dark);
        root.style.setProperty('--dark-purple',darkPurple);
        root.style.setProperty('--soft-purple',softPurple);
        root.style.setProperty('--screaming-purple',screamingPurple);
    }
}