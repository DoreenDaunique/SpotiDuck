import {Component} from '@angular/core';

import {SmartAudio} from '../../providers/smart-audio/smart-audio';

import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';
import {PlaylistPage} from "../playlist/playlist";


import {NavController} from 'ionic-angular';


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = LoginPage;
    tab3Root = PlaylistPage;


    tracks: any;
    currentTrack: any;


    constructor(public smartAudio: SmartAudio, public navCtrl: NavController) {

        this.tracks = [
            {title: 'Something About You', artist: 'ODESZA', playing: false, progress: 0, timer: 247000},
            {title: 'Run', artist: 'Allison Wonderland', playing: false, progress: 0, timer: 150000},
            {title: 'Breathe', artist: 'Seeb Neev', playing: false, progress: 0, timer: 226000},
            {title: 'HyperParadise', artist: 'Hermitude', playing: false, progress: 0, timer: 576000},
            {title: 'Lifespan', artist: 'Vaults', playing: false, progress: 0},
            {title: 'Stay High', artist: 'Tove Lo', playing: false, progress: 0},
            {title: 'Lean On', artist: 'Major Lazer', playing: false, progress: 0},
            {title: 'They Say', artist: 'Kilter', playing: false, progress: 0}
        ];

        this.currentTrack = this.tracks[0];

    }

    changeTab() {
        this.smartAudio.play('tabSwitch');
    }

    gotoPlaylist() {
        let title = this.currentTrack.title;
        let artist = this.currentTrack.artist;
        let track = this.currentTrack;
        let progressBar = this.currentTrack.progress;

    }

}
