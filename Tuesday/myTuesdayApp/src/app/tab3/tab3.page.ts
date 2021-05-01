import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsComponent } from '../modal/settings.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  constructor(private modalCtrl: ModalController){}

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: SettingsComponent,
      componentProps: {
        data: 5
      }
    })
    await modal.present();

    modal.onDidDismiss()
    .then( res => alert(JSON.stringify(res)))
  }
}
