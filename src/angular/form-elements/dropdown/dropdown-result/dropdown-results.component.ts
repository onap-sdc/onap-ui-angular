import {template} from "./dropdown-results.component.html";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {DropDownOptionType, IDropDownOption} from "../dropdown-models";

@Component({
  selector: 'dropdown-results',
  template: template
})
export class DropdownResultsComponent  {


  public DropDownOptionType = DropDownOptionType;

  @Input() selectedOption: IDropDownOption;
  @Input() isGroupDesign = false;
  @Input() options: IDropDownOption[];
  @Output() public onItemSelected: EventEmitter<IDropDownOption> = new EventEmitter<IDropDownOption>();

  public onItemClicked = (selectedOption: IDropDownOption) => {
    this.onItemSelected.emit(selectedOption)
  }
}
