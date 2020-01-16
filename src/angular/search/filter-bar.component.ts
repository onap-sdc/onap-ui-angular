import {Component, EventEmitter, Input, Output} from '@angular/core';
import { filterBarTemplate } from "./filter-bar.component.html";
import { SearchBaseComponent } from './search-base.component';

@Component({
    selector: 'sdc-filter-bar',
    template: filterBarTemplate
})
export class FilterBarComponent extends SearchBaseComponent{
    @Output('rightIconClicked') public rightIconClickedEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Input() defaultRightIcon: string = 'search-o';
    @Input() disabled: boolean;

    onRightIconClicked() {
        (this.value && !this.disabled) ? this.clearSearchQuery() : this.rightIconClickedEmitter.emit();
    }
}
