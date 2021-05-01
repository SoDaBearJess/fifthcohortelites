import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestContainerComponent } from './quest-container.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule ],
    declarations: [QuestContainerComponent],
    exports: [QuestContainerComponent]
})
export class QuestContainerComponentModule {}