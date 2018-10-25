import { Component, EventEmitter, Input, Output, forwardRef, OnChanges, SimpleChanges, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener, Renderer } from '@angular/core';
import { IDropDownOption, DropDownOptionType, DropDownTypes } from "./dropdown-models";
import { ValidatableComponent } from './../validation/validatable.component';
import { template } from './dropdown.component.html';
import {Size} from "../../common/enums";
import {BaseTextElementComponent} from "../text-elements/base-text-element.component";

@Component({
    selector: 'sdc-dropdown',
    template: template
})
export class DropDownComponent extends BaseTextElementComponent implements OnChanges, OnInit {

    @Output('changed') changeEmitter:EventEmitter<IDropDownOption> = new EventEmitter<IDropDownOption>();
    @Input() options: IDropDownOption[];
    @Input() selectedOption: IDropDownOption;
    @Input() type: DropDownTypes = DropDownTypes.Regular;
    @Input() size: Size;

    private myRenderer: Renderer;

    // Drop-down show/hide flag. default is false (closed)
    public show = false;

    // Export DropDownOptionType enum so we can use it on the template
    public cIDropDownTypes = DropDownTypes;

    // Configure unselectable option types
    private unselectableOptions = [
        DropDownOptionType.Disable,
        DropDownOptionType.Header,
        DropDownOptionType.HorizontalLine
    ];

    // Set or unset Group style on drop-down
    public isGroupDesign = false;
    public animation_init = false;
    public allOptions: IDropDownOption[];
    public filterValue: string;

    constructor(public renderer: Renderer) {
        super();
        this.myRenderer = renderer;
        this.filterValue = '';
    }

    ngOnInit(): void {
        if (this.options) {
            this.allOptions = this.options;
            // To support ES5
            if (this.options.filter(option => option.type === DropDownOptionType.Header).length>0) {
            // if (this.options.find(option => option.type === DropDownOptionType.Header)) {
                this.isGroupDesign = true;
            }
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges");
        if (changes.selectedOption && changes.selectedOption.currentValue !== changes.selectedOption.previousValue) {
            if (typeof changes.selectedOption.currentValue === 'string' && this.isSelectable(changes.selectedOption.currentValue)) {
                this.setSelected(changes.selectedOption.currentValue);
            } else if (this.isSelectable(changes.selectedOption.currentValue.value)) {
                this.setSelected(changes.selectedOption.currentValue.value);
            } else {
                this.setSelected(undefined);
            }
        }
    }

    public getValue(): any {
        return this.selectedOption && this.selectedOption.value;
    }

    public selectOption = (option: IDropDownOption): void => {
        if (typeof option === 'string' && this.isSelectable(option)) {
            this.setSelected(option);
        } else if (this.isSelectable((option as IDropDownOption).value)) {
            this.setSelected((option as IDropDownOption).value);
        }
        this.valueChanged(option);
    }

    public toggleDropdown = (event?): void => {
        if (event) { event.stopPropagation(); }
        this.show = !this.show;
    }

    public filterOptions = (filterValue): void => {
        if (filterValue.length >= 1 && !this.show) { this.toggleDropdown(); }
        if (this.selectedOption) { this.selectedOption = null; }
        this.options = this.allOptions.filter((option) => {
            return option.value.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
        });
    }

    private isSelectable = (value: string): boolean => {
        // Support ES5
        // const option: IDropDownOption = this.options.find(o => o.value === value);
        const option: IDropDownOption = this.options.filter(o => o.value === value)[0];
        if (!option) { return false; }
        if (!option.type) { return true; }
        // Support ES5
        // return !this.unselectableOptions.find(optionType => optionType === option.type);
        return !this.unselectableOptions.filter(optionType => optionType === option.type)[0];
    }

    private setSelected = (value: string): void => {
        // Support ES5
        // this.selectedOption = this.options.find(o => o.value === value);
        this.selectedOption = this.options.filter(o => o.value === value)[0];
        if (this.type === DropDownTypes.Auto) { this.filterValue = value; }
        this.show = false;
        this.changeEmitter.next(this.selectedOption);
    }

    public closeListOptions = ()=> {
      this.show = false;
    }

}
