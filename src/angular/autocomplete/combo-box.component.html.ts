export const template = `
<div class="sdc-autocomplete-container" [attr.data-tests-id]="testId">
      <sdc-input
                 #comboBoxInput
                 [label]="label"
                 [size]="size"
                 [value]="selectedValue"
                 [placeHolder]="placeHolder"
                 [debounceTime]="debounceTime"
                 [righIconName]="defaultRightIcon"
                 (onRighIconClicked)="onRightIconClicked()"
                 [isIconClickable] ="value? true: false"
                 (valueChange)="onSearchQueryChanged($event)"
                 [disabled]="disabled"
                 [testId]="testId + '-filter-bar'"
                 (clickOutside)="onClickOutside()"
                 (click)="onClickInside()"
                 >
      </sdc-input>
    <dropdown-results *ngIf="autoCompleteResults.length" [options]="autoCompleteResults" (onItemSelected)="onItemSelected($event)"></dropdown-results>
</div>
`;


//
// <dropdown-results *ngIf="autoCompleteResults.length && !clickOutside"
// (click)="onClickInside()"

