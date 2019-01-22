import { Component, Input } from "@angular/core";
import { SvgIconComponent } from './svg-icon.component';
import {Placement, Size} from "../common/enums";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { template } from './svg-icon-label.component.html';

@Component({
    selector: 'svg-icon-label',
    styleUrls: ['./svg-icon.component.scss'],
    template: template
})
export class SvgIconLabelComponent extends SvgIconComponent {

    @Input() public label: string;
    @Input() public labelPlacement: Placement;
    @Input() public labelClassName: string;
    @Input() public size: Size;
    @Input() public testId: string;

    constructor(protected domSanitizer: DomSanitizer) {
        super(domSanitizer);
        this.labelPlacement = Placement.left;
    }
}
