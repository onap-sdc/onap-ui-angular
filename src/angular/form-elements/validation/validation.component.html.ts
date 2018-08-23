export const template = `
<ng-content *ngIf="!disabled && (validateElement && validateElement.dirty)" [attr.data-tests-id]="testId"></ng-content>
`;
