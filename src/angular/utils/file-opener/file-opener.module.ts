import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FileOpenerComponent} from "./file-opener.component";

@NgModule({
  declarations: [
    FileOpenerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FileOpenerComponent
  ],
  entryComponents: [FileOpenerComponent]
})
export class FileOpenerModule {

}
