export const template = `
<svg-icon-label
    *ngIf="!isValid && !disabled"
    name="alert-triangle"
    mode="error"
    size="small"
    [label]="message"
    labelPlacement="right">
</svg-icon-label>
`;
