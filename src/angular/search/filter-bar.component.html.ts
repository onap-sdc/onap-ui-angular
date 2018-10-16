export const filterBarTemplate = `
<div class="search-bar-container"  [attr.data-tests-id]="testId" [class.active]="searchQuery && searchQuery.length" >
    <sdc-input class="search-bar-input" 
               [label]="label"
               [placeHolder]="placeholder"
               [debounceTime]="debounceTime"
               [(value)]="searchQuery"
               (valueChange)="searchItem($event)"
               [testId]="testId + '-input'"></sdc-input>
    <span class="clear-search-x filter-button" *ngIf="searchQuery" (click)="clearSearchQuery()">
      <svg-icon 
        [name]="'close'"
        [mode]="'secondary'"
        [size]="'small'">
      </svg-icon>
    </span>
    <span class="magnify-button filter-button" *ngIf="!searchQuery">
      <svg-icon 
        [name]="'search-o'"
        [mode]="'secondary'"
        [size]="'small'">
      </svg-icon>
    </span>
    
</div>
`;