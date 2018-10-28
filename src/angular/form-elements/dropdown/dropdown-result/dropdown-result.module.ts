import {DropdownResultsComponent} from "./dropdown-results.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {CommonDirectiveModule} from "../../../utils/common-directive.module";

@NgModule({
    declarations: [
        DropdownResultsComponent
    ],
    imports: [
        BrowserModule,
        CommonDirectiveModule,
        BrowserAnimationsModule,
        CommonModule
    ],
    entryComponents: [DropdownResultsComponent],
    exports: [
        DropdownResultsComponent
    ],
     providers:[]
})
export class DropdownResultsModule {
}
