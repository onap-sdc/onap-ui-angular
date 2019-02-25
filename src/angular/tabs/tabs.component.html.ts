export const template = `
<ul class="sdc-tabs-list" role="tablist" [attr.data-tests-id]="testId">
    <li *ngFor="let tab of tabs" class="{{tabStyle}}" role="tab" (click)="selectTab(tab)" [class.sdc-tab-active]="tab.active"
      sdc-tooltip [tooltip-text]="tab.tooltipText" [tooltip-placement]="3" [attr.data-tests-id]="tab.testId">
     <span class="tab-container">
     <svg-icon [ngClass]="{'tab-icon' : tab.title}"
     *ngIf="tab.titleIcon"
     [name]="tab.titleIcon"
     [mode]="tab.active ? 'white' : tab.titleIconMode"
     [size]="iconsSize">
    </svg-icon>
      <span class="tab-title" *ngIf="tab.title">{{tab.title}}</span>
      </span>
    </li>
</ul>
<div *ngIf="checkTabStyle()" class="line-separates"></div>
<ng-content></ng-content>
`;
