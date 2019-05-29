import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {FirebaseService} from "./services/firebase.service";
import {IndexComponent} from './index/index.component';
import {routing} from './app.routing';
import {AngularFirestoreModule} from "@angular/fire/firestore";


@NgModule({
    declarations: [
        AppComponent,
        IndexComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        routing
    ],
    providers: [ FirebaseService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
