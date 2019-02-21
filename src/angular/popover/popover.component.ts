import {
  Component, Input, Output, EventEmitter, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { template } from './popover.component.html';

export interface IPoint {
  x: number;
  y: number;
}

@Component({
  selector: 'onap-popover',
  template: template,
  // styleUrls: ['./popover.component.scss']

})
export class PopoverComponent implements OnInit{

  @Input() public title: string ;
  @Input() public content: string ;
  @Input() public relative: boolean = false;
  @Input() public instanceRef: ComponentRef<PopoverComponent>;
  @Input() public testId: string;
  @Input() public closeOnElemntClick: boolean;
  @Input() public location:string;
  @Output() public positionChange: EventEmitter<IPoint> = new EventEmitter<IPoint>();
  @Output() public popoverClosed: EventEmitter<string> = new EventEmitter<string>();

  // Allows for custom component as body instead of simple message.
  @ViewChild('popoverDynamicInnerContent', { read: ViewContainerRef }) popoverDynamicInnerContent: ViewContainerRef;
  innerPopoverContent: ComponentRef<any>;


  ngOnInit(): void {
    this._position.x = this._position.x + this.offset[this.location].x;
    this._position.y = this._position.y + this.offset[this.location].y;

    this.displayPopOverRightOrBottom = {
      'left': this.position.x + 'px',
      'top': this.position.y + 'px'
    }

    this.dispalyPopOverLeftOrTop = {
      'right':(document.documentElement.clientWidth - this.position.x ) + 'px',
      'bottom':(document.documentElement.clientHeight - this.position.y)  + 'px'
    }
  }

  //In case that the Popover will dispaly arrow
  //Will assist to make small changes in the X & Y axis, so the popover location will have a small space from the mouse
  //This space is also required for the arrow that needs its own space.
  private offset = {
    top: { x: 20, y:-30 },
    left: { x: -30, y: 30 },
    bottom: { x: 0, y: 30 },
    right: { x: 30, y: -30 }
  };


  private _position: IPoint = {x: 0, y: 0};
  private notFirstClick = false;
  private displayPopOverRightOrBottom = {};
  private dispalyPopOverLeftOrTop = {};




  @Input()
  public get position(): IPoint {
    return this._position;
  }

  public set position(position: IPoint) {
    position = position !== undefined ? position : {x: 0, y: 0};
    if (this._position.x !== position.x || this._position.y !== position.y) {
      this._position = position;
      this.positionChange.emit(this._position);
    }
  }
  public closePopover(){
    if(this.notFirstClick){
      this.instanceRef.destroy();
    }
    else{
      this.notFirstClick = true;
    }
  }

  public calcLocationFromTopLeft():boolean{
    if (this.location == 'right' || this.location == 'bottom'){
      return true;
    }
    if (this.location == 'left' || this.location == 'top'){
      return false;
    }
  }

}
