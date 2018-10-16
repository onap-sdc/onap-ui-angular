export const template = `
<ul class="sdc-tabs-list" role="tablist" [attr.data-tests-id]="testId">
    <li *ngFor="let tab of tabs" class="sdc-tab" role="tab" (click)="selectTab(tab)" [class.sdc-tab-active]="tab.active"
     sdc-tooltip [tooltip-text]="tab.tooltipText" [tooltip-placement]="3">
        <span *ngIf="tab.title">{{tab.title}}</span>
        <svg-icon-label
            *ngIf="tab.titleIcon"
            [name]="tab.titleIcon"
            [mode]="tab.titleIconMode"
            [size]="_size">
        </svg-icon-label>
    </li>
</ul>
<ng-content></ng-content>
`;
