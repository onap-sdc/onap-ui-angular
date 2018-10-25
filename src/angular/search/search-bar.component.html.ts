export const searchBartemplate = `
<div class="search-bar-container"  [attr.data-tests-id]="testId" [class.active]="value && value.length">  
    <sdc-input class="sdc-input-wrapper"
               [placeHolder]="placeHolder"
               [debounceTime]="debounceTime"
               [righIconName]="search-o"
               [(value)]="value"></sdc-input>
    <span class="search-button" (click)="searchItem()">
       <svg-icon 
        [clickable]="true"
        [name]="'search-o'"
        (click)="searchItem()"
        [backgroundShape]="'rectangle'"
        [backgroundColor]="'silver'"
        [mode]="'primary2'"
        [size]="'medium'">
    </svg-icon>
    </span>
</div>
`;
