import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { template } from "./search-bar.component.html";

@Component({
    selector: 'sdc-search-bar',
    template: template
})
export class SearchBarComponent {

    @HostBinding('class') classes = 'sdc-search-bar';
    @Input() public placeholder: string;
    @Input() public label: string;
    @Input() public searchQuery: string;
    @Input() public debounceTime: number;
    @Output() public searchQueryClick: EventEmitter<string> = new EventEmitter<string>();

    // constructor() {
    //     this.debounceTime = 200;
    // }
    
    public searchButtonClick = (): void => {
        this.searchQueryClick.emit(this.searchQuery);
    }
}
