import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

declare var window: any;
/*
  Generated class for the SpotifyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpotifyProvider {
  public authorCode: string;
  public access_token: string;
  public refresh_token: string;
  private clientId = '24db18af2b81458f862fa8e3981b1543';
  private clientSecret = '8b54a8c30e1c4395a6c5b93768e076d3';

  constructor(public http: HttpClient) {
    console.log('Hello SpotifyProvider Provider');
  }

  public requestAuthorCode() {
    const scopes = 'user-read-private user-read-email';
    const url = 'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + this.clientId +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent('http://localhost/callback');
    const browserRef = window.cordova.InAppBrowser.open(
      url,
      "_blank",
      "location=no, clearsessioncache=yes, clearcache=yes"
    );
    browserRef.addEventListener("loadstart", (evt) => {
      if ((evt.url).indexOf("http://localhost/callback") === 0) {
        browserRef.removeEventListener("exit", (evt) => {
        });
        browserRef.close();
        this.authorCode = evt.url.substring(31, evt.url.length);
        console.log("auth : " + this.authorCode);
      }

    });
  }

  public requestAccessRefreshToken() {
    console.log("request tokens : " + this.authorCode);
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    let postParams = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: 'authorization_code',
      code: this.authorCode,
      redirect_uri: 'http://localhost/callback',
    };
    let req = this.http.post('https://accounts.spotify.com/api/token', postParams, headers).subscribe(res => {
      console.log(res);
    }, err => {
      console.log("error occured");
    });
  }

  public spotifyLogin() {
      this.requestAuthorCode();
      this.requestAccessRefreshToken();
  }
}
