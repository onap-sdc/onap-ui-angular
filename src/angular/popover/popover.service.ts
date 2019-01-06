import { Injectable, ComponentRef, Type } from '@angular/core';
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";


import {IPoint} from "../popup-menu/popup-menu-list.component";
import {PopoverComponent} from "./popover.component";


@Injectable()
export class PopoverService {

    constructor(private createDynamicComponentService: CreateDynamicComponentService) {
    }

    public createPopOver = (title:string, content: string , positionOnPage: IPoint, location?: string): PopoverComponent => {
        const popoverConfig = {
            title: title ? title : "",
            content: content ? content : "",
            position: positionOnPage ? positionOnPage : { x: 0, y: 0 },
            location: location ? location : 'top',
        };
          const popoverInstance: ComponentRef<PopoverComponent> = this.openPopover(popoverConfig);
          return popoverInstance.instance;
    }

    public createPopOverWithInnerComponent = (title:string, content: string , positionOnPage: IPoint, dynamicComponentType: Type<any>, dynamicComponentInput?: any, location?: string) => {
      const popoverConfig = {
        title: title ? title : "",
        content: content ? content : "",
        position: positionOnPage ? positionOnPage : { x: 0, y: 0 },
        location: location ? location : 'top'
      };

      const popoverInstance: ComponentRef<PopoverComponent> = this.openPopoverWithInnerComponent(popoverConfig, dynamicComponentType, dynamicComponentInput);
      return popoverInstance.instance;
    }

    public openPopover = (customMMenuData: any): ComponentRef<PopoverComponent> => {
      let popoverInstance = this.createDynamicComponentService.createComponentDynamically(PopoverComponent, customMMenuData);
      popoverInstance.instance.instanceRef = popoverInstance;
      return popoverInstance;

    }


    public openPopoverWithInnerComponent = (customMMenuData: any, dynamicComponentType: Type<any>, dynamicComponentInput?: any): ComponentRef<PopoverComponent> => {
      let popoverInstance = this.createDynamicComponentService.createComponentDynamically(PopoverComponent, customMMenuData);
      popoverInstance.instance.instanceRef = popoverInstance;
       popoverInstance.instance.innerPopoverContent = this.createDynamicComponentService.insertComponentDynamically(dynamicComponentType, dynamicComponentInput, popoverInstance.instance.popoverDynamicInnerContent);
      return popoverInstance;
    }


}
