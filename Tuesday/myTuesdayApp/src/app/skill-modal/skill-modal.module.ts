import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {IonicModule } from '@ionic/angular';

import { SkillModal } from './skill-modal.component';

@NgModule({
    imports: [CommonModule, IonicModule, FormsModule],
    declarations: [SkillModal],
    entryComponents: [SkillModal],
    exports: [SkillModal]
})

export class SkillModalModule {}