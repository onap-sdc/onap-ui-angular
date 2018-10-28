import {NgModule} from "@angular/core";
import {ClickOutsideDirective} from "./clickoutside.directive";
import {RippleClickAnimationDirective} from "./animations/ripple-click.animation.directive";

@NgModule({
  declarations: [
    ClickOutsideDirective,
    RippleClickAnimationDirective
  ],
  exports: [
    ClickOutsideDirective,
    RippleClickAnimationDirective
  ],
  providers:[]
})
export class CommonDirectiveModule {
}
