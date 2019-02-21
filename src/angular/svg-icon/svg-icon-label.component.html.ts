export const template = `
<div class="svg-icon-wrapper" [ngClass]="[(mode) ? 'mode-'+mode : '', (size) ? 'size-'+size : '', (labelPlacement) ? 'label-placement-'+labelPlacement : '', (clickable) ? 'clickable' : '', className || '']" [attr.disabled]="disabled || undefined" 
    [attr.data-tests-id]="testId">
    <svg-icon [name]="name" className="svg-icon" [size]="size"></svg-icon>
    <span *ngIf="label" class="svg-icon-label" [ngClass]="[labelClassName || '']">{{ label }}</span>
</div>
`;
