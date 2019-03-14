export const template = `
<div class="sdc-accordion" [ngClass]="customCSSClass" [attr.data-tests-id]="testId">
    <div class="sdc-accordion-header" (click)="toggleAccordion()" [ngClass]="{'arrow-right': arrowDirection === accordionArrowDirection.right}">
        <div class="svg-icon-wrapper bottom" [ngClass]="{'down': open}">
            <svg-icon [name]="'chevron-up'"  [size]="'large'"  [clickable]="true" [mode]="'secondary'"></svg-icon>
        </div>
        <div class="title">
            {{title}}
        </div>
    </div>
    <div class="sdc-accordion-body" [ngClass]="{open: open}">
        <ng-content></ng-content>
    </div>
</div>`;
