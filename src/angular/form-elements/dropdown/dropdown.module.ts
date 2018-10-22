import {NgModule} from "@angular/core";
import {DropdownResultsModule} from "./dropdown-result/dropdown-result.module";
import {DropDownComponent} from "./dropdown.component";
import {BrowserModule} from "@angular/platform-browser";
import {SvgIconModule} from "../../svg-icon/svg-icon.module";
import {FormsModule} from "@angular/forms";
import {ClickOutsideDirective} from "../../utils/clickoutside.directive";

@NgModule({
  declarations: [
    DropDownComponent, ClickOutsideDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    SvgIconModule,
    DropdownResultsModule
  ],
  exports: [
    DropDownComponent
  ],
  providers:[],
  entryComponents: [DropDownComponent]
})
export class DropdownModule {
}
