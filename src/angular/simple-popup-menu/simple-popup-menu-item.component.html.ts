export const template = `
<li [ngClass]="[className || '', type || '', type == 'separator'? '': 'sdc-menu-item']" (click)="performAction($event)">
    <svg-icon
    *ngIf="displayIcon()"
    [name]="iconName"
    [type]="iconType"
    [mode]="iconMode"
    [size]="iconSize"
    >
    </svg-icon> 
    {{text}}
</li>`;
