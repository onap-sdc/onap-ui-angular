export const template = `
<div class="checkbox-item" *ngFor="let checkbox of checklistModel.checkboxes" #currentCheckbox>
  <sdc-checkbox
    [label]="checkbox.label"
    [(checked)]="checkbox.isChecked"
    [disabled]="checkbox.disabled"
    [testId]="checkbox.label | calculateTestId : testId"  
    (checkedChange)="checkboxCheckedChange(checkbox, checklistModel)"
    [ngClass]="{'semi-checked': !checkbox.isChecked && hasCheckedChild(currentCheckbox)}">
  </sdc-checkbox>
  <sdc-checklist
    *ngIf="checkbox.subLevelChecklist"
    class="checkbox-sublist"
    [testId]="checkbox.label | calculateTestId : testId"
    [checklistModel]="checkbox.subLevelChecklist"
    (checkedChange)="childCheckboxChange($event, checkbox)">
  </sdc-checklist>
</div>
`;
