import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { filterBarTemplate } from "./filter-bar.component.html";
import { SearchBaseComponent } from './search-base.component';

@Component({
    selector: 'sdc-filter-bar',
    template: filterBarTemplate
})
export class FilterBarComponent extends SearchBaseComponent{


}
