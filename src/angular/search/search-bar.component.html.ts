export const searchBartemplate = `
<div class="search-bar-container"  [attr.data-tests-id]="testId" [class.active]="searchQuery && searchQuery.length">  
    <sdc-input class="sdc-input-wrapper"
               [placeHolder]="placeholder"
               [debounceTime]="debounceTime"
               [(value)]="searchQuery"></sdc-input>
    <span class="search-button" (click)="searchItem()">
        <svg-icon 
          [name]="'search-o'"
          [mode]="'secondary'"
          [size]="'x_large'">
        </svg-icon>
    </span>
</div>
`;
