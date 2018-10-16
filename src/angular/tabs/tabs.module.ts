import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsComponent } from "./tabs.component";
import { TabComponent } from './children/tab.component';
import { SvgIconModule } from './../svg-icon/svg-icon.module';
import { TooltipModule } from "../tooltip/tooltip.module";

@NgModule({
    declarations: [
        TabsComponent,
        TabComponent
    ],
    imports: [
        CommonModule,
        SvgIconModule,
        TooltipModule
    ],
    exports: [
        TabsComponent,
        TabComponent
    ]
})
export class TabsModule {
}
