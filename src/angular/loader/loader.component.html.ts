export const template = `
<div class = "sdc-loader-wrapper" *ngIf="!global" [attr.data-tests-id]="testId">
    <div class="sdc-loader-background" *ngIf="active">
        <div class="sdc-loader {{ size }}" *ngIf="active"></div>
    </div>
    <ng-content></ng-content>
</div>
<div  *ngIf="global&&active">
    <div class="sdc-loader-global-wrapper sdc-loader-background" >
        <div class="sdc-loader {{ size }}"></div>
    </div>
</div>
`;
