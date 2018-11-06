import { OnInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AutocompletePipe } from "./autocomplete.pipe";
import { template } from "./autocomplete.component.html";
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
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
    @Input() public placeholder: string;
    @Output() public itemSelected: EventEmitter<any> = new EventEmitter<any>();
    @Input() public testId: string;

    public searchQuery: string;
    protected complexData: any[] = [];
    public autoCompleteResults: any[] = [];
    private isItemSelected: boolean = false;

    public constructor(private http: HttpClient, private autocompletePipe: AutocompletePipe) {
    }

    public ngOnInit(): void {
      console.log("NG ON INIT CALLL", this.data);
        if (this.data) {
            this.handleLocalData();
        }
        this.searchQuery = "";
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

      console.log("SIMPLE DATA", this.complexData);
    }

    protected convertComplexData = (): void => {
        this.complexData = [];
        this.data.forEach((item: any) => {
            this.complexData.push({label: item[this.dataSchema.label], value: item[this.dataSchema.value]});
        });
      console.log("COMPLEX DATA", this.complexData);
    }

    protected onItemSelected = (selectedItem: IDropDownOption): void => {
        this.searchQuery = selectedItem.value;
        this.isItemSelected = true;
        this.autoCompleteResults = [];
        this.itemSelected.emit(selectedItem.label);
    }

    public onSearchQueryChanged = (searchText: string): void => {
      console.log("onSearchQueryChanged searchText",searchText);
      console.log("onSearchQueryChanged searchQuery",this.searchQuery);
        if (searchText !== this.searchQuery) {
            this.searchQuery = searchText;
            if (!this.searchQuery) {
                this.onClearSearch();
            } else {
                if (this.dataUrl) {
                    const params = new HttpParams();
                    params.append('searchQuery', this.searchQuery);
                    this.http.get(this.dataUrl, {params})
                        .map((response) => {
                            this.data = JSON.parse(JSON.stringify(response));
                            this.handleLocalData();
                            this.autoCompleteResults = this.complexData;
                        }).subscribe();
                } else {
                    this.autoCompleteResults = this.autocompletePipe.transform(this.complexData, this.searchQuery);
                }
            }
            this.isItemSelected = false;
        }
        console.log("AUTOCOMPLETE RESULT", this.autoCompleteResults);
    }

    protected onClearSearch = (): void => {
        this.autoCompleteResults = [];
        if (this.isItemSelected) {
            this.itemSelected.emit();
        }
    }
}

