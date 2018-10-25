import {NgModule} from "@angular/core";
import {InputComponent} from "./input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {SvgIconModule} from "../../../svg-icon/svg-icon.module";

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    SvgIconModule
  ],
  exports: [
    InputComponent
  ],
  providers:[],
  entryComponents: [InputComponent]
})
export class InputModule {
}
