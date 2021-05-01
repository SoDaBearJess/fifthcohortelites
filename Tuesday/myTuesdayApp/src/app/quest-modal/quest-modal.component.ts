import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-quest-modal',
    templateUrl: './quest-modal.component.html',
    styleUrls: ['./quest-modal.component.scss']
})

export class QuestModal implements OnInit {
    questInput;

    constructor(private modalCtrl: ModalController) {}
    async close() {
        await this.modalCtrl.dismiss();
    }

    async submitClicked() {
        await this.modalCtrl.dismiss(this.questInput);
    }

    ngOnInit() {}
}