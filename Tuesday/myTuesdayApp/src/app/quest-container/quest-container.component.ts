import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-quest-container',
    templateUrl: './quest-container.component.html',
    styleUrls: ['./quest-container.component.scss']
})

export class QuestContainerComponent implements OnInit {
    @Input() quest: string;
    @Input() checked: boolean;

    constructor() {}

    ngOnInit() {}
}