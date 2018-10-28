import {NgModule} from "@angular/core";
import {DropdownResultsModule} from "./dropdown-result/dropdown-result.module";
import {DropDownComponent} from "./dropdown.component";
import {BrowserModule} from "@angular/platform-browser";
import {SvgIconModule} from "../../svg-icon/svg-icon.module";
import {FormsModule} from "@angular/forms";
import {InputModule} from "../text-elements/input/input.module";
import {CommonDirectiveModule} from "../../utils/common-directive.module";

@NgModule({
  declarations: [
    DropDownComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    SvgIconModule,
    InputModule,
    CommonDirectiveModule,
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
