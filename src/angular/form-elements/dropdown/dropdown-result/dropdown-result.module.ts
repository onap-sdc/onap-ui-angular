import {DropdownResultsComponent} from "./dropdown-results.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {ClickOutsideDirective} from "../../../utils/clickoutside.directive";

@NgModule({
    declarations: [
        DropdownResultsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule
    ],
    exports: [
        DropdownResultsComponent
    ],
     providers:[ClickOutsideDirective]
})
export class DropdownResultsModule {
}
