import { Component, Input, Output, EventEmitter, AfterContentInit, ComponentRef, HostListener } from '@angular/core';
import { menuItem } from './menu-data.interface';
import { template } from './simple-popup-menu-list.component.html';

export interface IPoint {
    x: number;
    y: number;
}

@Component({
    selector: 'popup-menu-list',
    template: template
   
})
export class SimplePopupMenuListComponent implements AfterContentInit {
    @Input()
    public get position(): IPoint {
        return this._position;
    }
    public set position(position: IPoint) {
        position = position !== undefined ? position : {x: 0, y: 0};
        if (this._position.x !== position.x || this._position.y !== position.y) {
            this._position = position;
            this.positionChange.emit(this._position);
        }
    }
    @Input() public className: string;
    @Input() public relative: boolean = false;
    @Output() public openChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() public positionChange: EventEmitter<IPoint> = new EventEmitter<IPoint>();
    @Input() public menuItemsData: menuItem[]
    @Input() public instanceRef: ComponentRef<SimplePopupMenuListComponent>;
    @Input() public testId: string;


    private _position: IPoint = {x: 0, y: 0};

    public ngAfterContentInit() {
    }
    public closeMenu(closeMenu: boolean){
        if(closeMenu){
            this.instanceRef.destroy();
        }    
    }
    @HostListener('document:click', ['$event']) 
    clickOutside($event) {
        this.instanceRef.destroy();
    }

    
}
