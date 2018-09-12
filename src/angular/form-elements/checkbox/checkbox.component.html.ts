export const template = `
<div class="sdc-checkbox">
    <label SdcRippleClickAnimation [rippleClickDisabled]="disabled">
        <input type="checkbox" class="sdc-checkbox__input" [ngModel]="checked" (ngModelChange)="toggleState($event)" [disabled]="disabled" [attr.data-tests-id]="testId">
        <span class="sdc-checkbox__label" [attr.data-tests-id]="testId">{{ label }}</span>
    </label>
</div>
`;
