import { Component, HostBinding, Input } from '@angular/core';
import { template } from "./tile.component.html";

@Component({
    selector: "sdc-tile",
    template: template
})

export class TileComponent {
    @Input() public testId: string;
    @HostBinding('class') classes = 'sdc-tile';
}
