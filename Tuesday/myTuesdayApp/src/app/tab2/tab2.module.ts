import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { QuestContainerComponentModule } from '../quest-container/quest-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { QuestModalModule } from '../quest-modal/quest-modal.module';

@NgModule({
  imports: [
    QuestModalModule,
    IonicModule,
    CommonModule,
    FormsModule,
    QuestContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
