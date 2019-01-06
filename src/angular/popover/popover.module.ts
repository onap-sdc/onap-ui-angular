import { NgModule } from "@angular/core";
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";
import { PopoverService } from "./popover.service";
import {PopoverComponent} from "./popover.component";
import {CommonModule} from "@angular/common";
import {SvgIconModule} from "../svg-icon/svg-icon.module";
import {CommonDirectiveModule} from "../utils/common-directive.module";

@NgModule({
    declarations: [
      PopoverComponent
    ],
    imports: [
      CommonModule,
      SvgIconModule,
      CommonDirectiveModule,

    ],
    exports: [
      PopoverComponent
    ],
    providers: [
        PopoverService,
        CreateDynamicComponentService
    ],
    entryComponents: [
      PopoverComponent
    ]
})
export class PopoverModule {
}
