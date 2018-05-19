import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


declare var window: any;
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {
    this.platform.ready()
      .then(this.spotifyLogin)
      .then(success => {
        alert('win');
      }, (error) => {
        alert(error);
      });
  };

  public spotifyLogin(): Promise<any> {
    return new Promise(function(resolve, reject) {
      const clientId = "24db18af2b81458f862fa8e3981b1543";
      const scopes = 'user-read-private user-read-email';
      const url = 'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + clientId +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent('http://localhost/callback');
      const browserRef = window.cordova.InAppBrowser.open(
        url,
        "_blank",
        "location=no, clearsessioncache=yes, clearcache=yes"
      );
      let responseParams : string;
      let parsedResponse : Object = {};
      browserRef.addEventListener("loadstart", (evt) => {
        if((evt.url).indexOf("http://localhost/callback") === 0) {
          browserRef.removeEventListener("exit", (evt) => {});
          browserRef.close();
          alert(evt);
        }
      });
      browserRef.addEventListener("exit", function(evt) {
        reject("Une erreur est survenue lors de la tentative de connexion à Spotify");
      });
    });
  }

}
