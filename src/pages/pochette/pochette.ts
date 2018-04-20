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
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PochettePage');
    }


}
