import { Component, Input } from '@angular/core';
import { template } from './error-detail-modal.component.html';


@Component({
    selector: 'error-detail-modal',
    template: template
})

export class ErrorDetailModalComponent {
    @Input() errorMessage: string;
    @Input() additionalDetails: any;

    public isOpen: boolean = false;
    public objectKeys = Object.keys;
    
    constructor() { }

}
