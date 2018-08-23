import { Component, Input, Output, EventEmitter, OnInit, ViewContainerRef, ViewChild } from "@angular/core";
import { NotificationSettings } from "../utilities/notification.config";
import { CreateDynamicComponentService } from "../../utils/create-dynamic-component.service";
import { template } from "./notification.component.html";

@Component({
    selector: 'sdc-notification',
    template: template
})

export class NotificationComponent implements OnInit {

    @Input() notificationSetting: NotificationSettings;
    @Output() destroyComponent = new EventEmitter<any>();
    @Input() public testId: string;
    @ViewChild('dynamicContentContainer', { read: ViewContainerRef }) dynamicContentContainer: ViewContainerRef;
    public fade: boolean = false;

    constructor(private createDynamicComponentService: CreateDynamicComponentService) {
    }

    public ngOnInit() {
        if (this.notificationSetting.hasCustomContent) {
            this.createDynamicComponentService.insertComponentDynamically(this.notificationSetting.innerComponentType, this.notificationSetting.innerComponentOptions, this.dynamicContentContainer);
        }

        if (!this.notificationSetting.sticky) {
            setTimeout(() => this.fadeOut(), this.notificationSetting.duration);
        }
    }

    public fadeOut = (): void => {
        this.fade = true;
    }

    public destroyMe() {
        /*Only destroy on fade out, not on entry animation */
        if (this.fade) {
            this.destroyComponent.emit(this.notificationSetting);
        }
    }

}
