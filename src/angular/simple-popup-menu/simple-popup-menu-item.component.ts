import { Component, Input, Output, EventEmitter } from '@angular/core';
import { template } from './simple-popup-menu-item.component.html';

@Component({
    selector: 'popup-menu-item',
    template: template
})
export class SimplePopupMenuItemComponent {
    @Input() public text: string;
    @Input() public iconName: string ;
    @Input() public iconType: string ;
    @Input() public iconMode: string = 'primary';
    @Input() public iconSize: string = 'medium';
    @Input() public className: string;
    @Input() public type: undefined|'disabled'|'selected'|'separator';
    @Input() public action: Function;
    @Output() public closeMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

    public performAction(evt) {
        evt.stopPropagation();

        if (['disabled', 'separator'].indexOf(this.type) !== -1) {
            return;
        }
        
        if (this.action) {
            this.action();
        }
        if(this.closeMenu){
            this.closeMenu.emit(true);
        }
    }
    public displayIcon(){
        return this.iconName && this.iconType && this.type != 'separator';
    }
}
