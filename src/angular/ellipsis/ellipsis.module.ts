import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MultilineEllipsisComponent} from './multiline-ellipsis.component';
import { CharsEllipsisComponent } from './chars-ellipsis.component';

@NgModule({
  declarations: [MultilineEllipsisComponent,
                CharsEllipsisComponent],
    imports: [CommonModule],
  exports: [MultilineEllipsisComponent,
            CharsEllipsisComponent],
  entryComponents: [MultilineEllipsisComponent,
                    CharsEllipsisComponent]
})
export class EllipsisModule {}
