import { Component, HostBinding, Input, AfterViewInit } from '@angular/core';
import { template } from "./tile.component.html";

@Component({
    selector: "sdc-tile",
    template: template
})

export class TileComponent implements AfterViewInit {
    @Input() public testId: string;
    @HostBinding('class') classes = 'sdc-tile';
    @HostBinding('attr.data-tests-id') dataTestId: string;

    ngAfterViewInit() {
      this.dataTestId = this.testId;
    }

}
