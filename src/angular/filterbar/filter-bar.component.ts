import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { template } from "./filter-bar.component.html";

@Component({
    selector: 'sdc-filter-bar',
    template: template
})
export class FilterBarComponent {

    @HostBinding('class') classes = 'sdc-filter-bar';
    @HostBinding('attr.data-tests-id') dataTestId: string;

    @Input() public placeholder: string;
    @Input() public label: string;
    @Input() public debounceTime: number;
    @Input() public searchQuery: string;
    @Input() public testId: string;
    @Output() public searchQueryChange: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        this.debounceTime = 200;
    }
    ngAfterViewInit() {
        this.dataTestId = this.testId;
    }

    public searchTextChange = ($event): void => {
        this.searchQueryChange.emit($event);
    }

    private clearSearchQuery = (): void => {
        this.searchQuery = "";
    }
}
