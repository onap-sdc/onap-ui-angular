import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { searchBartemplate } from "./search-bar.component.html";
import { SearchBaseComponent } from './search-base.component';
import {debug} from "util";

@Component({
    selector: 'sdc-search-bar',
    template: searchBartemplate
})
export class SearchBarComponent extends SearchBaseComponent {

   @HostBinding('class') classes = 'sdc-search-bar';
   @Output('onSearchClicked') public onSearchClicked: EventEmitter<any> = new EventEmitter<any>();

    public searchButtonClick = (): void => {
        console.debug("SEARCH CLICKED, VALUE IS: ", this.value);
        this.onSearchClicked.emit(this.value);
    }
}
