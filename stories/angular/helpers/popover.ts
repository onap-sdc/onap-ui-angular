import {Component, Input} from "@angular/core";
import { IPoint } from "../../../src/angular/simple-popup-menu/simple-popup-menu-list.component";
import {PopoverService} from "../../../src/angular/popover/popover.service";
import {ModalInnerContent} from "./modal-inner-content-example.component";


@Component({
  selector: 'popover',
  template: `
    <div style="position: relative; width: 400px; height: 200px; background: blue;">
      <span class="message" style="position: absolute; color: #ffffff;">Click on the button to open the popover menu 
        <br> To close:
        <br>&emsp;&bull; click on the popover X
        <br>&emsp;&bull; click anywhere outside of the popover window
        <br>
        <br>
        <span style="color:red">
          <b>&emsp;&bull; override location input will be relevant only for LEFT (all others are for simulation)</b>
        </span>
      </span>
    </div>
    <div *ngIf="template == 'simple'" style="margin-left:45px; margin-top:45px; display: flex; justify-content:space-around; width: auto; height: auto; ; position: relative">
      <sdc-button [text] = "'Popover Left'" (click) = "openPopoverTitleAndContent({x:$event.pageX , y:$event.pageY })"></sdc-button>
      <sdc-button [text] = "'Popover Top'" (click) = "openPopoverTitleAndContent({x:$event.pageX , y:$event.pageY }, 'top')"></sdc-button>
      <sdc-button [text] = "'Popover Right'" (click) = "openPopoverTitleAndContent({x:$event.pageX , y:$event.pageY }, 'right')"></sdc-button>
      <sdc-button [text] = "'Popover Bottom'" (click) = "openPopoverTitleAndContent({x:$event.pageX , y:$event.pageY }, 'bottom')"></sdc-button>
    </div>
    <div *ngIf="template == 'complex'" style="margin-left:45px; margin-top:45px; display: flex; justify-content:space-around; width: 400px; height: 200px; position: relative">
      <sdc-button [text] = "'Popover Bottom'" (click) = "openPopoverWithInnerComponent({x:$event.pageX , y:$event.pageY })"></sdc-button>
    </div>
  `
})
export class PopOverComponent {
  @Input() public template: string;
  @Input() public title: string;
  @Input() public content: string;
  @Input() public popoverLocation: string;


  constructor(private popoverService: PopoverService) {
  }

  private openPopoverTitleAndContent = (positionOnPage: IPoint, overrideLocation: string): void  => {
    overrideLocation ? this.popoverService.createPopOver(this.title, this.content , positionOnPage, overrideLocation) : this.popoverService.createPopOver(this.title, this.content , positionOnPage, this.popoverLocation);


  }


  private openPopoverWithInnerComponent = (positionOnPage: IPoint): void  => {
    this.popoverService.createPopOverWithInnerComponent(this.title, this.content , positionOnPage, ModalInnerContent, {name: "Sample Content"}, this.popoverLocation);
  }

  private customModalOnSave1 = (): void => {
    alert('Msg from Save btn');
  }

}
