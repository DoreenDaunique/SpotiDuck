import { Component } from '@angular/core';

import { SmartAudio } from '../../providers/smart-audio/smart-audio';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import {PlaylistPage} from "../playlist/playlist";
import {PochettePage} from "../pochette/pochette";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = PlaylistPage;
  tab4Root = PochettePage;

    constructor(public smartAudio: SmartAudio) {

    }

    changeTab() {
        this.smartAudio.play('tabSwitch');
    }

}
