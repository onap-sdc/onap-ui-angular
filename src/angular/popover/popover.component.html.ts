export const template = `
  <div  class = "sdc-popover" [ngStyle]="calcLocationFromTopLeft() ? displayPopOverRightOrBottom : dispalyPopOverLeftOrTop" (clickOutside)="closePopover()">
      <div class="outerContainer">
        <div class="closeButton"><svg-icon [name]="'close'" [clickable]="true" [disabled]="false" (click)="closePopover()"></svg-icon></div>
        <div class="innerContainer">
          <div class="title" *ngIf="title.length  > 0">{{title}}</div>
          <div class="content">{{content}}</div>
          <div #popoverDynamicInnerContent></div>
        </div>
      </div>
  </div>
`






