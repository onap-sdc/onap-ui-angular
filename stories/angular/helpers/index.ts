import { NgModule } from "@angular/core";
import { KeysPipe } from "./keys.pipe";
import { ColorsTable } from "./colors-table.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ButtonComponent } from "../../../src/angular/components";

@NgModule({
    declarations: [
        ColorsTable,
        KeysPipe,
        ButtonComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: []
})
export class SdcStoriesHelperModule {
}
