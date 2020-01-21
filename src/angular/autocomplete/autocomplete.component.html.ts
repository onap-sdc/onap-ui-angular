export const template = `
<div class="sdc-autocomplete-container" [attr.data-tests-id]="testId" (clickOutside)="onClickOutside()">
    <sdc-filter-bar
        [placeHolder]="placeholder"
        [label]="label"
        [value]="searchQuery"
        [testId]="testId + '-filter-bar'"
        (valueChange)="onSearchQueryChanged($event)"
        [defaultRightIcon]="defaultRightIcon"
        [disabled]="disabled"
        (rightIconClicked)="onRightItemClicked()"
        (click)="onClickInside()"
        >
    </sdc-filter-bar>

    <dropdown-results *ngIf="autoCompleteResults.length && !clickOutside" [options]="autoCompleteResults" (onItemSelected)="onItemSelected($event)"></dropdown-results>
</div>
`;
