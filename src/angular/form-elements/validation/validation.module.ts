import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SvgIconModule } from './../../svg-icon/svg-icon.module';
import { ValidationComponent } from './validation.component';
import { RequiredValidatorComponent } from './validators/required.validator.component';
import { RegexValidatorComponent } from './validators/regex.validator.component';
import { CustomValidatorComponent } from './validators/custom.validator.component';
import { ValidationGroupComponent } from './validation-group.component';
import { LengthValidatorComponent } from "./validators/length.validator.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        SvgIconModule
    ],
    declarations: [
        ValidationComponent,
        RegexValidatorComponent,
        RequiredValidatorComponent,
        LengthValidatorComponent,
        CustomValidatorComponent,
        ValidationGroupComponent
    ],
    exports: [
        ValidationComponent,
        RegexValidatorComponent,
        RequiredValidatorComponent,
        LengthValidatorComponent,
        CustomValidatorComponent,
        ValidationGroupComponent
    ]
})
export class ValidationModule {
}
