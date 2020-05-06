import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {RadioGroupComponent} from "./radios/radio-buttons-group.component";
import {DropDownTriggerDirective} from "./dropdown/dropdown-trigger.directive";
import {SvgIconModule} from "../svg-icon/svg-icon.module";
import {ValidationModule} from './validation/validation.module';
import {TextareaComponent} from "./text-elements/textarea/textarea.component";
import {CalculateTestIdPipe} from "../utils/calculate-test-id.pipe";
import {DropdownModule} from "./dropdown/dropdown.module";
import {DropdownResultsModule} from "./dropdown/dropdown-result/dropdown-result.module";
import {InputModule} from "./text-elements/input/input.module";
import {CommonDirectiveModule} from "../utils/common-directive.module";
import { NumberInputComponent } from "./text-elements/number-input/number-input.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonDirectiveModule,
    SvgIconModule,
    InputModule,
    DropdownResultsModule,
    DropdownModule
  ],
  declarations: [
    CheckboxComponent,
    RadioGroupComponent,
    DropDownTriggerDirective,
    TextareaComponent,
    NumberInputComponent,
    CalculateTestIdPipe
  ],
  exports: [
    DropdownResultsModule,
    DropDownTriggerDirective,
    InputModule,
    CheckboxComponent,
    RadioGroupComponent,
    ValidationModule,
    DropdownModule,
    NumberInputComponent,
    TextareaComponent,
    CalculateTestIdPipe,
    SvgIconModule
  ]
})
export class FormElementsModule {
}
