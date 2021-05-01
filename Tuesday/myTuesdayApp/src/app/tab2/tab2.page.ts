import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuestModal } from '../quest-modal/quest-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  quests=[
    {
      title: 'Finish the App',
      checked: false
    },
    {
      title: 'Go for a run',
      checked: false
    }, 
    {
      title: 'Wash the dishes',
      checked: false
    }, 
    {
      title: 'Workout',
      checked: false
    }, 
    {
      title: 'Mow the lawn',
      checked: false
    }, 
    {
      title: 'Rick roll someone',
      checked: true
    }
  ]

  constructor(private modalCtrl: ModalController) {}

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: QuestModal
    })

    modal.onDidDismiss().then((data) => {
      const newTitle = data['data'].toString();
      this.quests.push({
        title: newTitle,
        checked: false
      })
    });

    await modal.present();
  }

  ngOnInit() {}
}
