export const template = `
<div [attr.data-tests-id]="testId">
    <ng-content select="sdc-tile-header"></ng-content>
    <ng-content select="sdc-tile-content"></ng-content>
    <ng-content select="sdc-tile-footer"></ng-content>
</div>
`;
