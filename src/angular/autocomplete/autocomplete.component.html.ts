export const template = `
<div class="sdc-autocomplete-container" [ngClass]="{'results-shown': autoCompleteResults.length}" [attr.data-tests-id]="testId">
    <sdc-filter-bar
        [placeholder]="placeholder"
        [label]="label"
        [searchQuery]="searchQuery"
        [testId]="testId + '-filter-bar'"
        (searchQueryEvent)="onSearchQueryChanged($event)">
    </sdc-filter-bar>
    <dropdown-results [options]="autoCompleteResults" (onItemSelected)="onItemSelected($event)"></dropdown-results>
</div>
`;
