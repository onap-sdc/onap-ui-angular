export const filterBarTemplate = `
<div class="sdc-filter-bar" [attr.data-tests-id]="testId" [class.active]="searchQuery && searchQuery.length" >
      <sdc-input 
                 [label]="label"
                 [size]="size"
                 [placeHolder]="placeHolder"
                 [debounceTime]="debounceTime"
                 [(value)]="value"
                 [righIconName]="value? 'close': 'search-o'"
                 (onRighIconClicked)="value ? clearSearchQuery() : undefined"
                 [isIconClickable] ="value? true: false"
                 (valueChange)="searchItem($event)"
                 [testId]="testId + '-input'">
      </sdc-input>
</div>
`;
