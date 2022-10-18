export class morseCode {
    morseCodeJson(char: string, wantsMorseCode: boolean) {
        const rule = {
            "a": ".-",
            "b": "-...",
            "c": "-.-.",
            "d": "-..",
            "e": ".",
            "f": "..-.",
            "g": "--.",
            "h": "....",
            "i": "..",
            "j": ".---",
            "k": "-.-",
            "l": ".-..",
            "m": "--",
            "n": "-.",
            "o": "---",
            "p": ".--.",
            "q": "--.-",
            "r": ".-.",
            "s": "...",
            "t": "-",
            "u": "..-",
            "v": "...-",
            "w": ".--",
            "x": "-..-",
            "y": "-.--",
            "z": "--.."
        }
        char = char.toLowerCase();
        let objects = Object.entries(rule)

        if (wantsMorseCode) {
            for (let i = 0; i <= objects.length - 1; i++) {
                if (objects[i][0] == char) {
                    return objects[i][1];
                }
            }
        } else {
            let englishPhrase: string = '';
            let encryptedWords = char.split(' / ');
            if (!encryptedWords) { encryptedWords = char.split('/') }
            for (let enc of encryptedWords) {
                enc = enc.trim();
                let isThereSpace = enc.split('/')
                if (isThereSpace[1]) {
                    enc = isThereSpace[1];
                    enc = enc.trim();
                }
                for (let i = 0; i <= objects.length -1; i++) {
                    if (objects[i][1] == enc && isThereSpace[1]) {
                        englishPhrase += " " + objects[i][0];
                    }
                    if (objects[i][1] == enc && !isThereSpace[1]) {
                        englishPhrase += objects[i][0];
                    }
                }
            }
            return englishPhrase;
        }
        return ' Ops T.T';
    }

    morseCodeAlgoritym(text: string, wantsMorseCode: boolean) {
        let newString = '';
        if (wantsMorseCode) {
            for (let char of text) {
                if (char == ' ') {
                    newString += ' / '
                } else {
                    newString += this.morseCodeJson(char, wantsMorseCode) + ' / ';
                }
            }
        } else {
            newString += this.morseCodeJson(text + ' /', wantsMorseCode);
        }

        return newString;
    }

}