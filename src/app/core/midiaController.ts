export class midiaController {
    isPlaying: boolean = false;
    audio:any;
    setMusicFlag(play: boolean) {
        localStorage.setItem('playMusic', JSON.stringify(play))
        if (!play) {
            this.stopMusic();
        }
    }
    getMusicFlag(): boolean {
        let musicFlag: any = localStorage.getItem('playMusic')
        if (musicFlag) {
            musicFlag = JSON.parse(musicFlag);
            musicFlag = Boolean(musicFlag);
            return musicFlag;
        } else {
            return false;
        }
    }
    setSoundEffectFlag(play: boolean) {
        localStorage.setItem('soundEffect', JSON.stringify(play))
    }
    getSoundEffectFlag(): boolean {
        let soundEffect: any = localStorage.getItem('soundEffect')
        if (soundEffect) {
            soundEffect = JSON.parse(soundEffect);
            soundEffect = Boolean(soundEffect);
            return soundEffect;
        } else {
            return false;
        }
    }
    playMusic() {
        let random = Math.floor(Math.random() * (4 - 1 + 1) + 1)
        this.audio = new Audio(`../../assets/songs/bot-${random}.mp4`);
        if (this.isPlaying == false) {
            this.isPlaying = true
            this.audio.play();
            this.audio.onended = function() {
                this.changeMusic()
            };
        }
    }

    changeMusic(){
        this.playMusic();
    }

    stopMusic() {
        debugger;
        this.isPlaying = false;
        this.audio.pause()
    }
}