import { Component, EventEmitter, Input, Output, HostBinding } from "@angular/core";
import { template } from "./tag-item.component.html";

@Component({
    selector: 'sdc-tag-item',
    template: template
})

export class TagItemComponent {
    @HostBinding('class') classes = 'sdc-tag-item';
    @HostBinding('attr.data-tests-id') dataTestId: string;
    @Input() public text: string;
    @Input() public isViewOnly: boolean;
    @Input() public index: number;
    @Input() public testId: string
    @Output() public clickOnDelete: EventEmitter<number> = new EventEmitter<number>();
    private dataTestIdDelete: string;

    ngAfterViewInit() {
        this.dataTestId = this.testId + '-' + this.text;
        this.dataTestIdDelete = this.dataTestId + '-delete'
    }
}
