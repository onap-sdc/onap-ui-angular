export const template = `<svg-icon-label
    *ngIf="!disabled"
    name="alert-triangle"
    mode="error"
    size="small"
    [testId]="testId"
    [label]="message"
    labelPlacement="right">
</svg-icon-label>`