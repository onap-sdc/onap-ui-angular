import { Component, EventEmitter, Input, Output, OnInit, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { IDropDownOption, DropDownOptionType } from "./dropdown-models";
import { template } from './dropdown.component.html';
import {Size} from "../../common/enums";
import {BaseTextElementComponent} from "../text-elements/base-text-element.component";
import { InputComponent } from '../text-elements/input/input.component';

@Component({
    selector: 'sdc-dropdown',
    template: template
})
export class DropDownComponent extends BaseTextElementComponent implements OnInit, OnChanges {

    @ViewChild('dropdownInput') public dropdownInput: InputComponent;
    @Output('changed') changeEmitter:EventEmitter<IDropDownOption> = new EventEmitter<IDropDownOption>();
    @Input() options: IDropDownOption[];
    @Input() selectedOption: IDropDownOption;
    @Input() selectedOptionVal: string;
    @Input() size: Size;


    // Drop-down show/hide flag. default is false (closed)
    public show = false;

    // Configure unselectable option types
    private unselectableOptions = [
        DropDownOptionType.Disable,
        DropDownOptionType.Header,
        DropDownOptionType.HorizontalLine
    ];

    // Set or unset Group style on drop-down
    public isGroupDesign = false;
    public allOptions: IDropDownOption[];
    public filterValue: string;

    ngOnInit(): void {
        if (this.options) {
            this.allOptions = this.options;
            if (this.options.filter(option => option.type === DropDownOptionType.Header).length>0) {
                this.isGroupDesign = true;
            }
        }
        this.selectedOption = this.selectedOption || this.getSelectedOptionByVal(this.selectedOptionVal) || <IDropDownOption>{};
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.selectedOptionVal && this.allOptions) {
            const newSelection = this.getSelectedOptionByVal(changes.selectedOptionVal.currentValue);
            this.selectOption(newSelection);
        }
    }

    public getValue(): any {
        return this.selectedOption && this.selectedOption.value;
    }

    private getSelectedOptionByVal = (value: string): IDropDownOption => {
        return this.allOptions.filter(item => item.value === value && this.isSelectable(item))[0];
    }

    public selectOption = (selectedOption: IDropDownOption): void => {
        if (this.isSelectable(selectedOption)) {
          this.selectedOption = selectedOption;
          this.show = false;
          this.changeEmitter.next(this.selectedOption);
        }
        this.valueChanged(this.getValue());
        this.dropdownInput.dirty = this.dirty;
        this.dropdownInput.valid = this.valid;
    }

    public toggleDropdown = (event?): void => {
        if (event) { event.stopPropagation(); }
        if (!this.disabled) {
            this.show = !this.show;
        }
    }

    private isSelectable = (dropDownOption: IDropDownOption): boolean => {
        // const option: IDropDownOption = this.options.filter(o => o.value === dropDownOption.value)[0];
        if (!dropDownOption) { return false; }
        return !this.unselectableOptions.filter(optionType => optionType === dropDownOption.type)[0];
    }

    public closeListOptions = () => {
      this.show = false;
    }

}
