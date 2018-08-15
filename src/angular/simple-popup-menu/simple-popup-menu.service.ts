import { Injectable, ComponentRef } from '@angular/core';
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";


import { menuItem } from './menu-data.interface';
import { SimplePopupMenuListComponent, IPoint } from './simple-popup-menu-list.component';

@Injectable()
export class simplePopupMenuService {

    constructor(private createDynamicComponentService: CreateDynamicComponentService) {
    }

    public openBaseMenu = (menuItemsData: menuItem[], position?: IPoint, relative?: boolean): SimplePopupMenuListComponent => {
        const popupMenuConfig = {
            menuItemsData: menuItemsData,
            position: position ? position : { x: 0, y:0 },
            relative: relative ? relative : true
        };
        const popupMenuInstance: ComponentRef<SimplePopupMenuListComponent> = this.openPopUpMenu(popupMenuConfig);
        return popupMenuInstance.instance;
    }

    public openPopUpMenu = (customMMenuData: any): ComponentRef<SimplePopupMenuListComponent> => {
        let popupMenuInstance: ComponentRef<SimplePopupMenuListComponent> = this.createDynamicComponentService.createComponentDynamically(SimplePopupMenuListComponent, customMMenuData);
        popupMenuInstance.instance.instanceRef = popupMenuInstance;
        return popupMenuInstance;
    }

}
