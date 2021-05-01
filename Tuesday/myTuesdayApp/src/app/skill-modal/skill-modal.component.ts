import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-skill-modal',
    templateUrl: './skill-modal.component.html',
    styleUrls: ['./skill-modal.component.scss']
})

export class SkillModal implements OnInit {
    skillInput;
    levelInput;

    constructor(private modalCtrl: ModalController) {}
    async close() {
        await this.modalCtrl.dismiss();
    }

    async submitClicked() {
        await this.modalCtrl.dismiss(this.skillInput, "Level " + this.levelInput);
    }

    ngOnInit() {}
}