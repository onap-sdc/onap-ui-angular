import { NgModule } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';
import { TooltipTemplateComponent } from './tooltip-template.component';
import { CreateDynamicComponentService } from '../utils/create-dynamic-component.service';

@NgModule({
    declarations: [
        TooltipDirective,
        TooltipTemplateComponent
    ],
    imports: [],
    entryComponents: [TooltipTemplateComponent],
    exports: [
        TooltipDirective
    ],
    providers: [CreateDynamicComponentService]
})
export class TooltipModule {
}
