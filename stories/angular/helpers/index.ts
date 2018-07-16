import { NgModule } from "@angular/core";
import { KeysPipe } from "./keys.pipe";
import { ColorsTable } from "./colors-table.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ColorsTable,
        KeysPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: []
})
export class SdcStoriesHelperModule {
}
