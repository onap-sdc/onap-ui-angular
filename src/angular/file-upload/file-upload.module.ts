import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FileUploadComponent} from "./file-upload.component";
import {ButtonsModule} from "../buttons/buttons.module";
import {InputModule} from "../form-elements/text-elements/input/input.module";
import {SvgIconModule} from "../svg-icon/svg-icon.module";
import {FileOpenerModule} from "../utils/file-opener/file-opener.module";
import {ValidationModule} from "../form-elements/validation/validation.module";

@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    InputModule,
    SvgIconModule,
    FileOpenerModule,
    ValidationModule
  ],
  exports: [
    FileUploadComponent
  ],
  entryComponents: [
    FileUploadComponent
  ],

  providers: []
})
export class FileUploadModule {

}
