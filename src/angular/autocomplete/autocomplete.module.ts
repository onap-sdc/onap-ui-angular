import { NgModule } from "@angular/core";
import { AutoCompleteComponent } from "./autocomplete.component";
import { CommonModule } from "@angular/common";
import { SearchModule } from "./../search/search.module";
import { AutocompletePipe } from "./autocomplete.pipe";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonDirectiveModule} from "../utils/common-directive.module";
import {ComboBoxComponent} from "./combo-box.component";
import {InputModule} from "../form-elements/text-elements/input/input.module";

@NgModule({
    declarations: [
        AutoCompleteComponent,
        ComboBoxComponent,
        AutocompletePipe
    ],
    imports: [
        InputModule,
        BrowserModule,
        BrowserAnimationsModule,
        SearchModule,
        CommonModule,
        CommonDirectiveModule
    ],
    exports: [
        AutoCompleteComponent,
        ComboBoxComponent,
        AutocompletePipe
    ]
})
export class AutoCompleteModule {
}
