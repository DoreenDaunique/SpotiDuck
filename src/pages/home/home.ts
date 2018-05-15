import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ModalController} from "ionic-angular";



import {PochettePage} from "../pochette/pochette";
import {NativeAudio} from "@ionic-native/native-audio";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tracks: any;
  currentTrack: any;
  progressInterval: any;
  soundLoaded: any;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController,private nativeAudio: NativeAudio) {

        this.tracks = [
            {title: 'Something About You', artist: 'ODESZA', playing: false, progress: 0},
            {title: 'Run', artist: 'Allison Wonderland', playing: false, progress: 0},
            {title: 'Breathe', artist: 'Seeb Neev', playing: false, progress: 0},
            {title: 'HyperParadise', artist: 'Hermitude', playing: false, progress: 0},
            {title: 'Lifespan', artist: 'Vaults', playing: false, progress: 0},
            {title: 'Stay High', artist: 'Tove Lo', playing: false, progress: 0},
            {title: 'Lean On', artist: 'Major Lazer', playing: false, progress: 0},
            {title: 'They Say', artist: 'Kilter', playing: false, progress: 0}
        ];

        this.currentTrack = this.tracks[0];

    }

    ionViewWillEnter() {
        this.nativeAudio.preloadComplex('Something About You', 'assets/music/Shine.mp3',1, 1, 0).then(onSuccess => {
            this.soundLoaded = true;
            console.log('preloadSimple : ' + onSuccess);
        }, onError => {
            console.error('preloadSimple : ' + onError);
        });
        this.nativeAudio.preloadComplex('Run', 'assets/music/Caramelo.mp3',1, 1, 0).then(onSuccess => {
            this.soundLoaded = true;
            console.log('preloadSimple : ' + onSuccess);
        }, onError => {
            console.error('preloadSimple : ' + onError);
        });
        this.nativeAudio.preloadComplex('Breathe', 'assets/music/Hang.mp3',1, 1, 0).then(onSuccess => {
            this.soundLoaded = true;
            console.log('preloadSimple : ' + onSuccess);
        }, onError => {
            console.error('preloadSimple : ' + onError);
        });
        this.nativeAudio.preloadComplex('HyperParadise', 'assets/music/Ocean.mp3',1, 1, 0).then(onSuccess => {
            this.soundLoaded = true;
            console.log('preloadSimple : ' + onSuccess);
        }, onError => {
            console.error('preloadSimple : ' + onError);
        });
    }


    playTrack(track){

        // First stop any currently playing tracks

        for(let checkTrack of this.tracks){

            if(checkTrack.playing){
                this.pauseTrack(checkTrack);
            }

        }

        track.playing = true;
        this.currentTrack = track;

        this.nativeAudio.play( track.title, () => console.log('uniqueId1 is done playing'));

        // Simulate track playing
        this.progressInterval = setInterval(() => {

            track.progress < 100 ? track.progress++ : track.progress = 0;

        }, 1000);

    }

    pauseTrack(track){

        track.playing = false;

        this.nativeAudio.stop(track.title).then(onSuccess => {
            this.soundLoaded = true;
            console.log('preloadSimple : ' + onSuccess);
        }, onError => {
            console.error('preloadSimple : ' + onError);
        });
        clearInterval(this.progressInterval);

    }

    nextTrack(){

        let index = this.tracks.indexOf(this.currentTrack);
        index >= this.tracks.length - 1 ? index = 0 : index++;

        this.playTrack(this.tracks[index]);

    }

    prevTrack(){

        let index = this.tracks.indexOf(this.currentTrack);
        index > 0 ? index-- : index = this.tracks.length - 1;

        this.playTrack(this.tracks[index]);

    }

    gotoPochette() {
        let pochette = this.modalCtrl.create(PochettePage, {
            'title':this.currentTrack.title,
            'artist':this.currentTrack.artist,
            'track':this.currentTrack,
            'progressBar':this.currentTrack.progress
        });
        pochette.present();
    }

}
