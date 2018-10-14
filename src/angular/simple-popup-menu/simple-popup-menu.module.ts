import { NgModule } from "@angular/core";
import { SimplePopupMenuListComponent } from "./simple-popup-menu-list.component";
import { SimplePopupMenuItemComponent } from "./simple-popup-menu-item.component";
import { CommonModule } from "@angular/common";
import { simplePopupMenuService } from "./simple-popup-menu.service";
import { SvgIconModule } from "../svg-icon/svg-icon.module";
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";
import { ClickOutsideDirective } from "../utils/clickoutside.directive";

@NgModule({
    declarations: [
        SimplePopupMenuListComponent,
        SimplePopupMenuItemComponent,
        ClickOutsideDirective
    ],
    imports: [
        CommonModule,
        SvgIconModule
    ],
    exports: [
        SimplePopupMenuListComponent,
        SimplePopupMenuItemComponent
    ],
    providers: [
        simplePopupMenuService,
        CreateDynamicComponentService
    ],
    entryComponents: [
        SimplePopupMenuListComponent,
        SimplePopupMenuItemComponent
    ]
})
export class SimplePopupMenuModule {
}
