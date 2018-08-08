export const template = `
<li [ngClass]="[className || '', type || '', type == 'separator'? '': 'sdc-menu-item']"
    (click)="performAction($event)">
    <ng-content *ngIf="type != 'separator'"></ng-content>
</li>`;
