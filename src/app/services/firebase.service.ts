import {Injectable} from '@angular/core';

import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/firestore";

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(protected db: AngularFirestore) {
    }

    getAboutUs = () => {
        return this.db.collection('about_us', ref => ref.orderBy('title')).valueChanges();
    }
}
