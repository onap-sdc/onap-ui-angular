export const template = `
<div (clickOutside)="closeListOptions()" class="sdc-dropdown" [attr.data-tests-id]="testId">
      <input type="hidden" class="sdc-dropdown__value" [name]="name" [value]="this.selectedOption.value" />
      <sdc-input class="sdc-dropdown__input" #dropdownInput
              [disabled]="disabled"
              [value]="this.selectedOption.label"
              [required]="required"
              [size]="size"
              [isViewMode]="true"
              [testId]="testId"
              [label]="label"
              [isIconClickable]="!disabled"
              [righIconName]="'caret1-down-o'"
              (click)="toggleDropdown()"
              [placeHolder]="this.selectedOption?.label || this.selectedOption?.value || placeHolder">
      </sdc-input>
      <dropdown-results *ngIf="show" [options]="allOptions" [isGroupDesign]="isGroupDesign" [selectedOption]="selectedOption" (onItemSelected)="selectOption($event)"></dropdown-results>
</div>
`;
