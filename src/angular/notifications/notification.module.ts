import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationComponent } from "./notification/notification.component";
import { NotificationContainerComponent } from "./container/notifcontainer.component";
import { NotificationsService } from "./services/notifications.service";
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";
import { InnerNotifContent } from "./notification-inner-content-example.component";

@NgModule({
    declarations: [
        InnerNotifContent,
        NotificationComponent,
        NotificationContainerComponent,
    ],
    exports: [
        InnerNotifContent,
        NotificationComponent,
        NotificationContainerComponent,
    ],
    entryComponents: [
        InnerNotifContent,
        NotificationComponent,
        NotificationContainerComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: [NotificationsService, CreateDynamicComponentService]
})
export class NotificationModule {

}
