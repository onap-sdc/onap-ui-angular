export const template = `
<ng-content *ngIf="!disabled && (validateElement && validateElement.dirty)"></ng-content>
`;
