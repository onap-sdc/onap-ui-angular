export const template = `
<div class = "sdc-loader-wrapper" *ngIf="!global" [attr.data-tests-id]="testId">
    <div class="sdc-loader-background" *ngIf="active"
      [style.top]="offset.top" [style.left]="offset.left" [style.width]="offset.width"  [style.height]="offset.height">
        <div class="sdc-loader {{ size }}" *ngIf="active"></div>
    </div>
    <ng-content></ng-content>
</div>
<div  *ngIf="global&&active" [attr.data-tests-id]="testId">
    <div class="sdc-loader-global-wrapper sdc-loader-background" >
        <div class="sdc-loader {{ size }}"></div>
    </div>
</div>
`;
