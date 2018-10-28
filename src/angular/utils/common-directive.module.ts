import {NgModule} from "@angular/core";
import {ClickOutsideDirective} from "./clickoutside.directive";

@NgModule({
  declarations: [
    ClickOutsideDirective
  ],
  exports: [
    ClickOutsideDirective
  ],
  providers:[]
})
export class CommonDirectiveModule {
}
