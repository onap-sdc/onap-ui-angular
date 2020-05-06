export const template = `
<div class="sdc-input sdc-number-input">
    <label class="sdc-input__label" *ngIf="label" [ngClass]="{'required':required}">{{label}}</label>
    <div class="sdc-input-wrapper">
        <input
            class="sdc-input__input sdc-input__number-input {{classNames}} {{size}}"
            [ngClass]="{'error': (!valid && dirty), 'disabled':disabled}"
            [attr.name]="name ? name : null"
            [placeholder]="placeHolder"
            [(ngModel)]="value"
            [max]="maxValue"
            [min]="minValue"
            [type]="'number'"
            (input)="onKeyPress()"
            (keyup)="validateMax($event.target.value)"
            (keydown)="onKeyDown($event)"
            (blur)="validateMin($event.target.value)"
            [formControl]="control"
            [attr.disabled]="(disabled || isViewMode) ? 'disabled' : null"
            [attr.data-tests-id]="testId"
        />
        <div class="sdc-input__spinner-buttons" *ngIf="!(disabled || isViewMode)">
            <svg-icon name="caret1-up-o" mode="secondary" (click)="clickUp()" [clickable]="true" size="small" [testId]="testId +'-up-icon'"></svg-icon>
            <svg-icon name="caret1-down-o" mode="secondary" (click)="clickDown()" [clickable]="true" size="small" [testId]="testId +'-down-icon'"></svg-icon>
        </div>
    </div>
</div>
`;
