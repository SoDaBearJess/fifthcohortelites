import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { SkillContainerComponentModule } from '../skill-container/skill-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { SkillModalModule } from '../skill-modal/skill-modal.module';

@NgModule({
  imports: [
    SkillContainerComponentModule,
    SkillModalModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
