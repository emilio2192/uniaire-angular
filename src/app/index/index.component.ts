import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    aboutUs: any;
    constructor(protected firebaseService: FirebaseService) {
    }

    ngOnInit() {
        this.aboutUs = this.firebaseService.getAboutUs();
    }

}
