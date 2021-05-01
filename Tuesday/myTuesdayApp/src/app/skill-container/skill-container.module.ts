import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillContainerComponent } from './skill-container.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule ],
    declarations: [SkillContainerComponent],
    exports: [SkillContainerComponent]
})
export class SkillContainerComponentModule {}