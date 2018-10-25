import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {RadioGroupComponent} from "./radios/radio-buttons-group.component";
import {AnimationDirectivesModule} from '../animations/animation-directives.module';
import {DropDownTriggerDirective} from "./dropdown/dropdown-trigger.directive";
import {SvgIconModule} from "../svg-icon/svg-icon.module";
import {ValidationModule} from './validation/validation.module';
import {TextareaComponent} from "./text-elements/textarea/textarea.component";
import {CalculateTestIdPipe} from "../utils/calculate-test-id.pipe";
import {DropdownModule} from "./dropdown/dropdown.module";
import {DropdownResultsModule} from "./dropdown/dropdown-result/dropdown-result.module";
import {InputModule} from "./text-elements/input/input.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AnimationDirectivesModule,
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
    TextareaComponent,
    CalculateTestIdPipe,
    SvgIconModule
  ]
})
export class FormElementsModule {
}
