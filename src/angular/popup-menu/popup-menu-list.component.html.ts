export const template = `
<ul
  class="sdc-menu-list"
  *ngIf="open"
  [ngClass]="[className || '', relative? 'relative': '']"
  [ngStyle]="{'left': position.x + 'px', 'top': position.y + 'px'}"
  (click)="$event.stopPropagation()"
  [attr.data-tests-id]="testId">
  <ng-content></ng-content>
</ul>`;
