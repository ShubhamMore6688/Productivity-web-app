import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  audio: HTMLAudioElement = new Audio();
  playMusic(){
    if(this.audio.paused){
        this.audio.src = "../../../assets/audio.mp3"
        this.audio.load();
        this.audio.play();

    }else{
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}
