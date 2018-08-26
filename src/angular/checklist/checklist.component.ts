import { Component, EventEmitter, Input, Output, HostBinding, AfterViewInit } from "@angular/core";
import { ChecklistModel } from "./models/Checklist";
import { ChecklistItemModel } from "./models/ChecklistItem";
import { template } from "./checklist.component.html";

@Component({
    selector: 'sdc-checklist',
    template: template
})
export class ChecklistComponent implements AfterViewInit {
    @Input() public checklistModel: ChecklistModel;
    @Input() public testId: string;
    @Output() public checkedChange: EventEmitter<ChecklistItemModel> = new EventEmitter<ChecklistItemModel>();
    @HostBinding('attr.data-tests-id') dataTestId: string;

    ngAfterViewInit() {
      this.dataTestId = this.testId;
    }

    private checkboxCheckedChange(checkbox: ChecklistItemModel, currentChecklistModel: ChecklistModel, stopPropagation?: boolean) {
        // push/pop the checkbox value
        if (checkbox.isChecked) {
            currentChecklistModel.selectedValues.push(checkbox.value);
        } else {
            const index: number = currentChecklistModel.selectedValues.indexOf(checkbox.value);
            currentChecklistModel.selectedValues.splice(index, 1);
        }
        if (!stopPropagation) {
            if (checkbox.subLevelChecklist &&
                ((checkbox.isChecked && checkbox.subLevelChecklist.selectedValues.length < checkbox.subLevelChecklist.checkboxes.length) ||
                (!checkbox.isChecked && checkbox.subLevelChecklist.selectedValues.length))) {
                checkbox.subLevelChecklist.checkboxes.forEach((childCheckbox: ChecklistItemModel) => {
                    if (childCheckbox.isChecked !== checkbox.isChecked) {
                        childCheckbox.isChecked = checkbox.isChecked;
                        this.checkboxCheckedChange(childCheckbox, checkbox.subLevelChecklist);
                    }
                });
            }
        }
        // raise event
        this.checkedChange.emit(checkbox);
    }

    private childCheckboxChange(updatedCheckbox: ChecklistItemModel, parentCheckbox: ChecklistItemModel) {
        let updatedValues: any[] = parentCheckbox.subLevelChecklist.selectedValues;
        if (parentCheckbox.isChecked !== (updatedValues.length === parentCheckbox.subLevelChecklist.checkboxes.length)) {
            parentCheckbox.isChecked = updatedValues.length === parentCheckbox.subLevelChecklist.checkboxes.length;
            this.checkboxCheckedChange(parentCheckbox, this.checklistModel, true);
        }
        this.checkedChange.emit(updatedCheckbox);
    }

    private hasCheckedChild(currentCheckbox: Element): boolean {
        return !!currentCheckbox.querySelector(".sdc-checkbox__input:checked");
    }
}
