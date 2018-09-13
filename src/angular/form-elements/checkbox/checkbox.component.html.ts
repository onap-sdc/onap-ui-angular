export const template = `
<label SdcRippleClickAnimation [rippleClickDisabled]="disabled">
    <input type="checkbox" class="sdc-checkbox__input" [ngModel]="checked" (ngModelChange)="toggleState($event)" [disabled]="disabled">
    <span class="sdc-checkbox__label" [attr.data-tests-id]="testId">{{ label }}</span>
</label>
`;
