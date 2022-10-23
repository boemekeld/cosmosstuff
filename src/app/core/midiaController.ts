import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


export class midiaController {
    isPlaying: boolean = false;
    audio: HTMLAudioElement = new Audio('../../assets/songs/bot-1.mp4');
    audioSubscription: any
    listen(duration:any) {
        this.audioSubscription = interval(5000).subscribe((x => {
            if (this.isPlaying) {
                this.playMusic()
            }
        }));
    }

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
            
            this.listen(this.audio.duration);
        }
    }

    stopMusic() {
        this.isPlaying = false;
        this.audio.pause()
    }
}