import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessageComponent } from './validation-message.component';
import { SvgIconModule } from '../svg-icon/svg-icon.module';

@NgModule({
    declarations: [ValidationMessageComponent],
    imports: [ CommonModule, SvgIconModule ],
    exports: [ValidationMessageComponent],
    providers: [],
})
export class ValidationMessageModule {}