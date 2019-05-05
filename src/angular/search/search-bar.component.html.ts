export const searchBartemplate = `
<div class="search-bar-container"  [attr.data-tests-id]="testId" [class.active]="value && value.length">  
    <sdc-input class="sdc-input-wrapper"
               [placeHolder]="placeHolder"
               [debounceTime]="debounceTime"
               (valueChange)="searchItem($event)"
               [size]="size"
               [righIconName]="'search-o'"
               [(value)]="value"></sdc-input>
    <span class="search-button" (click)="searchButtonClick()">
      <svg-icon 
          [clickable]="true"
          [name]="'search-o'"
          [backgroundShape]="'rectangle'"
          [backgroundColor]="'silver'"
          [mode]="'primary2'"
          [size]="size">
      </svg-icon>
    </span>
</div>
`;
