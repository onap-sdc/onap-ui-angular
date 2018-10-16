import { NgModule } from "@angular/core";
import { SearchBarComponent } from "./search-bar.component";
import { CommonModule } from "@angular/common";
import { FormElementsModule } from "../form-elements/form-elements.module";
import { SearchBaseComponent } from "./search-base.component";
import { SvgIconModule } from "../svg-icon/svg-icon.module";
import { FilterBarComponent } from "./filter-bar.component";

@NgModule({
    declarations: [
        SearchBarComponent,
        SearchBaseComponent,
        FilterBarComponent
    ],
    imports: [
        CommonModule,
        FormElementsModule
    ],
    exports: [
        SearchBarComponent,
        SearchBaseComponent,
        FilterBarComponent
    ],
})
export class SearchModule {
}
