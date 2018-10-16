import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
    selector: 'sdc-search',
    template: ''
})
export class SearchBaseComponent {
 
    @Input() public placeholder: string;
    @Input() public searchQuery: string;
    @Input() public label: string;
    @Input() public debounceTime: number;
    @Input() public testId: string;
    @Output() public searchQueryEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.debounceTime = 200;
    }
    
    public searchItem = ($event?): void => {
        this.searchQueryEvent.emit($event ? $event : this.searchQuery);
    }

    private clearSearchQuery = (): void => {
        this.searchQuery = "";
    }

}
