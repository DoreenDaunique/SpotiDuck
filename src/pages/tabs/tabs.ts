import { Component } from '@angular/core';

import { SmartAudio } from '../../providers/smart-audio';

import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;


    constructor(public smartAudio: SmartAudio) {

    }

    changeTab() {
        this.smartAudio.play('tabSwitch');
    }

}
