import { DecimalPipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-skill-container',
    templateUrl: './skill-container.component.html',
    styleUrls: ['./skill-container.component.scss']
})

export class SkillContainerComponent implements OnInit {
    @Input() skill: string;
    @Input() progress: any;
    @Input() icon: string;
    @Input() level: any;

    constructor () {}

    ngOnInit() {}
}