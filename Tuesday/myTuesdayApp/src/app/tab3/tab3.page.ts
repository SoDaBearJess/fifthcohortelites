import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SkillModal } from '../skill-modal/skill-modal.component'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit{

  skills=[
    {
      skill: "Strength",
      progress: 0.9,
      icon: "../assets/Pictures/strength.png",
      level: "Level 43"
    },
    {
      skill: "Running",
      progress: 0.5,
      icon: "../assets/Pictures/Shoes.png",
      level: "Level 37"
    }, 
    {
      skill: "Cleaning",
      progress: 0.2,
      icon: "../assets/Pictures/Cleaning.png",
      level: "Level 13"
    },
    {
      skill: "Homework",
      progress: 0.1,
      icon: "../assets/Pictures/strength.png",
      level: "Level 45",
    },
    {
      skill: "Responsibility",
      progress: 0.24,
      icon: "../assets/Pictures/Responsible.png",
      level: "Level 62"
    }
  ]

  constructor(private modalCtrl: ModalController){}

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: SkillModal
    })

    modal.onDidDismiss().then((data) => {
      const newSkill = data['data'].toString();
      const newLevel = data['role'].toString();

      console.log(data);

      this.skills.push({
        skill: newSkill,
        progress: 0.5,
        icon: "../assets/Pictures/strength.png",
        level: newLevel
      })
    })

    await modal.present();
  }

  ngOnInit() {}
}
