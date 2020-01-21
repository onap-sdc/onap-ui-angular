import { OnInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AutocompletePipe } from "./autocomplete.pipe";
import { template } from "./autocomplete.component.html";
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {IDropDownOption} from "../form-elements/dropdown/dropdown-models";

@Component({
    selector: 'sdc-autocomplete',
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
export class AutoCompleteComponent implements OnInit {
    @Input() public data: any[] = [];
    @Input() public dataSchema: IDropDownOption;
    @Input() public dataUrl: string;
    @Input() public label: string;
    @Input() public initialValue: string;
    @Input() public placeholder: string;
    @Output() public itemSelected: EventEmitter<any> = new EventEmitter<any>();
    @Output() public clearInput: EventEmitter<any> = new EventEmitter<any>();
    @Input() public testId: string;
    @Input() public defaultRightIcon: string = 'search-o';
    @Input() public disabled: boolean;

    public clickOutside: boolean = false;
    public searchQuery: string = '';
    protected complexData: any[] = [];
    public autoCompleteResults: any[] = [];
    private isItemSelected: boolean = false;

    public constructor(protected http: HttpClient, protected autocompletePipe: AutocompletePipe) {
    }

    public ngOnInit(): void {
        if (this.data) {
            this.handleLocalData();
        }
        if (this.initialValue) {
          this.searchQuery = this.initialValue;
          this.isItemSelected = true;
        }
    }

    public handleLocalData = (): void => {
        // Convert the data (simple | complex) to unified complex data with key value.
        // In case user supplied dataSchema, this is complex data
        if (!this.dataSchema) {
            this.convertSimpleData();
        } else {
            this.convertComplexData();
        }
    }

     public convertSimpleData = (): void => {
        this.complexData = [];
        this.data.forEach((item: any) => {
            this.complexData.push({label: item, value: item});
        });
    }

    protected convertComplexData = (): void => {
        this.complexData = [];
        this.data.forEach((item: any) => {
            this.complexData.push({label: item[this.dataSchema.label], value: item[this.dataSchema.value]});
        });
    }

    protected onItemSelected = (selectedItem: IDropDownOption): void => {
        this.searchQuery = selectedItem.value;
        this.isItemSelected = true;
        this.autoCompleteResults = [];
        this.itemSelected.emit(selectedItem.label);
    }

    public onSearchQueryChanged = (searchText: string): void => {
        if (searchText !== this.searchQuery) {
            this.searchQuery = searchText;
            if (!this.searchQuery) {
                this.onClearSearch();
            } else {
                if (this.dataUrl) {
                    const params = {'searchQuery': this.searchQuery};
                    this.http.get(this.dataUrl, {params: params})
                        .pipe(map((response) => {
                            this.data = JSON.parse(JSON.stringify(response));
                            this.handleLocalData();
                            this.autoCompleteResults = this.complexData;
                        })).subscribe();
                } else {
                    this.autoCompleteResults = this.autocompletePipe.transform(this.complexData, this.searchQuery);
                }
            }
            this.isItemSelected = false;
        }
    }

    public onRightItemClicked() {
        if (this.disabled) {
            return;
        }
        this.autoCompleteResults = this.autocompletePipe.transform(this.complexData, this.searchQuery);
    }

    protected onClearSearch = (): void => {
        this.autoCompleteResults = [];
        if (this.isItemSelected) {
            this.itemSelected.emit();
        }
        this.searchQuery = '';
        this.clearInput.emit();
    }

    public onClickOutside(){
        this.clickOutside = true;
    }

    public onClickInside(){
        this.clickOutside = false;
        if (this.disabled) {
            return;
        }
        this.autoCompleteResults = this.autocompletePipe.transform(this.complexData, this.searchQuery);
    }

}

