export const template = `
<ul class="sdc-menu-list"
  [ngClass]="[className || '', relative? 'relative': '']"
  [ngStyle]="{'left': position.x + 'px', 'top': position.y + 'px'}"
  [attr.data-tests-id]="testId"
  (click)="$event.stopPropagation()">
  <popup-menu-item *ngFor="let item of menuItemsData"
      [text]="item.text"
      [iconName]="item.iconName"
      [iconType]="item.iconType"
      [iconMode]="item.iconMode"
      [iconSize]="item.iconSize"
      [type]="item.type"
      [action]="item.action"
      [className]="item.className"
      (closeMenu)="closeMenu($event)"
  >
  </popup-menu-item>
</ul>`;
