export const template = `
  <ul *ngIf="options" class="dropdown-results dropdown-results__animation-open" [ngClass]="{
              'sdc-dropdown__options-list--headless': headless
              }">
    <li class="sdc-dropdown__option" *ngFor="let option of options" [ngClass]="{
                              'selected': option == selectedOption,
                              'sdc-dropdown__option--group':isGroupDesign,
                              'sdc-dropdown__option--header': option.type && option.type === DropDownOptionType.Header,
                              'sdc-dropdown__option--disabled': option.type && option.type === DropDownOptionType.Disable,
                              'sdc-dropdown__option--hr': option.type && option.type === DropDownOptionType.HorizontalLine
                          }"
        (click)="onItemClicked(option)">{{option.label || String(option.value)}}
    </li>
  </ul>
`;
