import {OnInit, Component, EventEmitter, Input, Output, ViewChild, ElementRef} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AutocompletePipe } from "./autocomplete.pipe";
import { template } from "./combo-box.component.html";
import { IDropDownOption } from "../form-elements/dropdown/dropdown-models";
import { SearchBaseComponent } from "../search/search-base.component";
import { InputComponent } from "../form-elements/text-elements/input/input.component";

@Component({
    selector: 'sdc-combo-box',
    template: template,
    animations: [
        trigger('displayResultsAnimation', [
            state('true', style({
                height: '*',
                opacity: 1
            })),
            state('false', style({
                height: 0,
                opacity: 0
            })),
            transition('* => *', animate('200ms'))
        ]),
    ]
})
export class ComboBoxComponent extends SearchBaseComponent implements OnInit {
    @Output('rightIconClicked') public rightIconClickedEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Input() public data: IDropDownOption[] = [];
    @Input() public label: string;
    @Input() public selectedValue: string;
    @Output() public itemSelected: EventEmitter<any> = new EventEmitter<any>();
    @Input() public testId: string;
    @Input() public defaultRightIcon: string = 'caret1-down-o';
    @Input() public disabled: boolean;
    @Input() public noResultsMessage: string = 'No matches..';

    @ViewChild('comboBoxInput') public input: InputComponent;

    // protected complexData: any[] = [];
    public autoCompleteResults: IDropDownOption[] = [];
    private isSearchMode: boolean = false;
    private oldValue: string;
    private oldRightIcon: string;
    private isRightButtonClicked = false;
    private isItemSelected = false;
    private isCloseClicked = false;

    public constructor(private _elementRef : ElementRef, protected autocompletePipe: AutocompletePipe) {
        super();
    }

    ngOnInit() {
        this.input.isViewMode = true;
    }

    onItemSelected = (selectedItem: IDropDownOption): void => {
        if (selectedItem.value === this.noResultsMessage) {
            return;
        }
        this.itemSelected.emit(this.selectedValue);
        this.handleExitSearchMode(selectedItem.value);
    }

    onSearchQueryChanged = (searchText: string): void => {
        if (this.isSearchMode) {
            this.autoCompleteResults = this.calculateComboBoxResults(this.data, searchText);
        }
    }

    onClickOutside() {
        if (this.isRightButtonClicked || this.isItemSelected || !this.isSearchMode) {
            this.isRightButtonClicked = false;
            this.isItemSelected = false;
            return;
        }
        this.handleExitSearchMode();
    }

    onClickInside() {
        if (this.isCloseClicked){
            this.isCloseClicked = false;
            return;
        }
        if (this.isSearchMode === false) {
            this.handleEnterSearchMode();
        }
    }

    onRightIconClicked() {
        this.isRightButtonClicked = true;
        if (this.defaultRightIcon === 'close') {
            this.rightIconClickedEmitter.emit('close');
            this.isCloseClicked = true;
            this.handleExitSearchMode();
        } else {
            this.rightIconClickedEmitter.emit('select');
            this.handleEnterSearchMode();
        }
    }

    handleExitSearchMode(newValue?) {
        this.input.isViewMode = true;

        // Reset State to non-search mode
        this.isSearchMode = false;

        // Reset Icon to Select
        this.defaultRightIcon = this.oldRightIcon;

        // Restore selected value
        this.selectedValue = newValue ? newValue : this.oldValue;
        this.isItemSelected = true;

        this.autoCompleteResults = [];
    }

    handleEnterSearchMode() {
        this.input.isViewMode = false;
        setTimeout(() => this._elementRef.nativeElement.getElementsByTagName("input")[0].focus(), 10);

        // Reset State to search mode
        this.isSearchMode = true;

        // Set Icon to 'close'
        this.oldRightIcon = this.defaultRightIcon;
        this.defaultRightIcon = 'close';

        this.oldValue = this.selectedValue;
        this.selectedValue = '';
        this.input.placeHolder = this.placeHolder;

        this.autoCompleteResults = this.calculateComboBoxResults(this.data, '');
    }

    calculateComboBoxResults(data, query) {
        const tmp = this.autocompletePipe.transform(data, query);
        if (tmp.length === 0) {
            tmp.push({ label: this.noResultsMessage, value: this.noResultsMessage });
        }
        return tmp;
    }
}
