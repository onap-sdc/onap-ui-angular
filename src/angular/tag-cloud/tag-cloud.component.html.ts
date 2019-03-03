export const template = `
<div class="sdc-tag-cloud-new-item-field" [ngClass]="{'not-empty': newTagItem}" [attr.data-tests-id]="testId">
    <sdc-input [label]="label"
               [disabled]="(isViewOnly===true)"
               [placeHolder]="placeholder"
               [(value)]="newTagItem"
               (keyup)="onKeyup($event)"
               [ngClass]="{'error': uniqueError}"
               [testId]="testId + '-input'"></sdc-input>
    <div class="add-button" (click)="newTagItem && insertItemToList()" [ngClass]="{'disabled': !newTagItem || uniqueError}">
        <svg-icon [name]="'plus'" [type]="'common'" className="plus-icon" [size]="'xlarge'" [testId]="testId + '-add-item'" [backgroundShape]="'rectangle'"></svg-icon>
    </div>
</div>
<div class="sdc-list-container">
    <sdc-tag-item *ngFor="let item of list; let i = index;"
                   [text]="item"
                   [index]="i"
                   [testId]="testId"
                   [isViewOnly]="isViewOnly && (isViewOnly === true || isViewOnly.indexOf(i) > -1)"
                   (clickOnDelete)="deleteItemFromList($event)"
                   sdc-tooltip [tooltip-text]="item" [tooltip-placement]="3" [tooltip-hide-onclick]="true"
                   ></sdc-tag-item>
</div>
<div class="error-message" *ngIf="uniqueError">{{uniqueErrorMessage}}</div>
`;