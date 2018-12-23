import {NgModule} from "@angular/core";
import {ButtonComponent} from "./button.component";
import {CommonModule} from "@angular/common";
import {SvgIconModule} from './../svg-icon/svg-icon.module';
import {ButtonFileOpenerComponent} from './button-file-opener.component';
import {TooltipModule} from './../tooltip/tooltip.module'
import {FileOpenerModule} from "../utils/file-opener/file-opener.module";

@NgModule({
    declarations: [
        ButtonComponent,
        ButtonFileOpenerComponent
    ],
    imports: [
        CommonModule,
        SvgIconModule,
        TooltipModule,
        FileOpenerModule
    ],
    exports: [
        ButtonComponent,
        ButtonFileOpenerComponent
    ],
})
export class ButtonsModule {

}
