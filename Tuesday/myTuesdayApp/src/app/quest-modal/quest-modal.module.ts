import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { QuestModal } from './quest-modal.component';

@NgModule({
    imports: [CommonModule, IonicModule, FormsModule],
    declarations: [QuestModal],
    entryComponents: [QuestModal],
    exports: [QuestModal]
})

export class QuestModalModule {}