import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {SpotiduckApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {NativeAudio} from '@ionic-native/native-audio';

//Modules
import {ComponentsModule} from '../components/components.module';
import {DirectivesModule} from '../directives/directives.module';
import {PipesModule} from '../pipes/pipes.module';
import {IonicStorageModule} from '@ionic/storage';
import {HttpClientModule} from '@angular/common/http';

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {UserProvider} from '../providers/user/user';
import {DckProvider} from '../providers/dck/dck';

import {ProgressBarComponent} from '../components/progress-bar/progress-bar';
import {SmartAudio} from "../providers/smart-audio/smart-audio";
// import {SmartAudioProvider} from '../providers/smart-audio/smart-audio';

@NgModule({
    declarations: [
        SpotiduckApp,
        HomePage,
        TabsPage,
        ProgressBarComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ComponentsModule,
        DirectivesModule,
        IonicModule.forRoot(SpotiduckApp, {
            // tabsPlacement: 'top',
            backButtonText: 'Retour'
        }),
        IonicStorageModule.forRoot({
            name: '__duckcoindb',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        SpotiduckApp,
        HomePage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        UserProvider,
        DckProvider,
        // SmartAudioProvider,
        NativeAudio,
        SmartAudio,
    ]
})
export class AppModule {
}
