import {Component, Input, Output, EventEmitter, HostBinding} from '@angular/core';
import {st} from "@angular/core/src/render3";
import {BaseTextElementComponent} from "../form-elements/text-elements/base-text-element.component";

@Component({
  selector: 'sdc-search',
  template: ''
})
export class SearchBaseComponent extends BaseTextElementComponent {

    constructor() {
      super();
      this.debounceTime = 200;
    }

    public searchItem = ($event?): void => {
      this.baseEmitter.emit($event ? $event : this.value);
    }

    private clearSearchQuery = (): void => {
      this.value = "";
    }

}
