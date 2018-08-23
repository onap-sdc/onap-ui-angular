import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { CommonModule } from "@angular/common";
import { SvgIconModule } from './../svg-icon/svg-icon.module';
import { ButtonFileOpenerComponent } from './button-file-opener.component';
import {TooltipModule} from './../tooltip/tooltip.module'

@NgModule({
    declarations: [
        ButtonComponent,
        ButtonFileOpenerComponent
    ],
    imports: [
        CommonModule,
        SvgIconModule,
        TooltipModule
    ],
    exports: [
        ButtonComponent,
        ButtonFileOpenerComponent
    ],
})
export class ButtonsModule {

}
