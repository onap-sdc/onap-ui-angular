export const filterBarTemplate = `
<div class="sdc-filter-bar" [attr.data-tests-id]="testId" [class.active]="value && value.length" >
      <sdc-input
                 [label]="label"
                 [size]="size"
                 [placeHolder]="placeHolder"
                 [debounceTime]="debounceTime"
                 [(value)]="value"
                 [righIconName]="(value && !disabled) ? 'close': defaultRightIcon"
                 (onRighIconClicked)="onRightIconClicked()"
                 [isIconClickable] ="value? true: false"
                 (valueChange)="searchItem()"
                 [disabled]="disabled"
                 [testId]="testId + '-input'">
      </sdc-input>
</div>
`;
