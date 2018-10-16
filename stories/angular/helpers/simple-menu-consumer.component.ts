import {Component, Input, HostListener} from "@angular/core";
import { IPoint } from "../../../src/angular/simple-popup-menu/simple-popup-menu-list.component";
import { menuItem } from "../../../src/angular/simple-popup-menu/menu-data.interface";
import { simplePopupMenuService } from "../../../src/angular/simple-popup-menu/simple-popup-menu.service";


@Component({
    selector: 'simple-menu-consumer',
    template: `
    <div *ngIf="template == 'clickOnDiv'" style="position: relative; width: 400px; height: 200px; background: blue;"
    (click)="openMenu({x:$event.offsetX, y:$event.offsetY})">
    <span class="message" style="position: absolute; color: #ffffff;">Click in the box to open the popup menu</span>
    </div>
    <sdc-button *ngIf="template == 'clickButton'" [text]="'View Menu'" (click)="openMenu({x:$event.offsetX, y:$event.offsetY})"></sdc-button>`
})
export class SimplepMenuConsumerComponent {
    @Input() public template: string;
    public openAlert(selectItemName){
        alert(selectItemName + ' item of the menu selected')
    }
    private menuItemsData: menuItem[] = [
        {
            text: 'First',
            iconName: 'notification',
            iconType: 'resources_24',
            iconMode: 'secondary',
            iconSize: 'small',
            type: '',
            action: () => this.openAlert('First')  
        },
        {
            text: 'Selected',
            iconName: 'gateway',
            iconType: 'resources_24',
            type: 'selected',
            action: () => this.openAlert('Selected')  
        },
        {
            text: 'Disabled',
            iconName: 'loadBalancer',
            iconType: 'resources_24',
            type: 'disabled'
        },
        {
            text: '',
            type: 'separator'
        },
        {
            text: 'Second',
            iconName: 'mobility',
            iconType: 'resources_24',
            type: '',
            action: () => this.openAlert('Second')  
        },
    ]
    constructor(private simplePopupMenuService: simplePopupMenuService) {
    }
    private openMenu(position: IPoint): void {
        this.simplePopupMenuService.openBaseMenu(this.menuItemsData, position);
    }
}
