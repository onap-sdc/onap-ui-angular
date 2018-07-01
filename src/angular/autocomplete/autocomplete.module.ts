import { NgModule } from "@angular/core";
import { AutoCompleteComponent } from "./autocomplete.component";
import { CommonModule } from "@angular/common";
import { FilterBarModule } from "../filterbar/filter-bar.module";
import { AutocompletePipe } from "./autocomplete.pipe";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AutoCompleteComponent,
        AutocompletePipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FilterBarModule,
        CommonModule
    ],
    exports: [
        AutoCompleteComponent,
        AutocompletePipe
    ]
})
export class AutoCompleteModule {
}
