export class midiaController {
    isPlaying: boolean = false;
    setMusicFlag(play: boolean) {
        localStorage.setItem('playMusic', JSON.stringify(play))
        if (!play) {
            location.reload()
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
        debugger;
        var audio = new Audio('../../assets/songs/bot-2.mp4');
        if (this.isPlaying == false) {
            this.isPlaying = true
            audio.play();
        }
    }

    stopMusic() {
    }
}