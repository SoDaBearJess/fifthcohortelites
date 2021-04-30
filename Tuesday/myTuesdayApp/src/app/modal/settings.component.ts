import { Component, Input, OnInit } from '@angular/core';
import  { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {
    @Input() data: any;
    constructor(private modalCtrl: ModalController) {}
    async close() {
        await this.modalCtrl.dismiss({userData: 3});
    }
    ngOnInit() {}
}