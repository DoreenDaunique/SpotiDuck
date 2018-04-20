import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import {ViewController} from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import {Platform} from 'ionic-angular';

/**
 * Generated class for the PochettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-pochette',
    templateUrl: 'pochette.html',
})
export class PochettePage {

    tracks: any;
    currentTrack: any;
    progressInterval: any;
    title: any;
    artist: any;
    track: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public platform: Platform,
                public params: NavParams,
                public viewCtrl: ViewController) {

        this.title = this.params.get('title');
        this.artist = this.params.get('artist');
        this.track = this.params.get('track');

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


    playTrack(track){

        // First stop any currently playing tracks

        for(let checkTrack of this.tracks){

            if(checkTrack.playing){
                this.pauseTrack(checkTrack);
            }

        }

        track.playing = true;
        this.currentTrack = track;

        // Simulate track playing
        this.progressInterval = setInterval(() => {

            track.progress < 100 ? track.progress++ : track.progress = 0;

        }, 1000);

    }

    pauseTrack(track){

        track.playing = false;
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


    dismiss() {
        this.viewCtrl.dismiss();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PochettePage');
    }


}
