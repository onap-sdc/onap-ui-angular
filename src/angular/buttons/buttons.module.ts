import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { CommonModule } from "@angular/common";
import { SvgIconModule } from './../svg-icon/svg-icon.module';
import { ButtonFileOpenerComponent } from './button-file-opener.component';

@NgModule({
    declarations: [
        ButtonComponent,
        ButtonFileOpenerComponent
    ],
    imports: [
        CommonModule,
        SvgIconModule
    ],
    exports: [
        ButtonComponent,
        ButtonFileOpenerComponent
    ],
})
export class ButtonsModule {

}
