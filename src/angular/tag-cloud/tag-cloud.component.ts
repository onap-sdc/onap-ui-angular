import { Component, EventEmitter, Input, Output } from "@angular/core";
import { template } from "./tag-cloud.component.html";

@Component({
    selector: 'sdc-tag-cloud',
    template: template,
})
export class TagCloudComponent {
    @Input() public list: string[];
    @Input() public isViewOnly: boolean | number[]; // get a boolean parameter or array of specific items indexes.
    @Input() public isUniqueList: boolean;
    @Input() public uniqueErrorMessage: string = "Unique error";
    @Input() public label: string;
    @Input() public placeholder: string;
    @Input() public maxItems: number;
    @Output() public listChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
    @Input() public testId: string;
    public newTagItem: string;
    public uniqueError: boolean;

    public onKeyup = (e): void => {
        if (e.keyCode === 13) {
            this.insertItemToList();
        }
    }

    public insertItemToList = (): void => {
        if(!this.maxItems || this.list.length < this.maxItems) {
            this.validateTag();
            if (!this.uniqueError && this.newTagItem.length) {
                this.list.push(this.newTagItem);
                this.newTagItem = "";
                this.listChanged.emit(this.list);
            }
        }
    }

    private deleteItemFromList = (index: number): void => {
        this.list.splice(index, 1);
        if (Array.isArray(this.isViewOnly)) {
            this.isViewOnly = this.isViewOnly.map((i: number) => {
                return i > index ? i - 1 : i;
            });
        }
    }

    private validateTag = (): void => {
        if(this.isUniqueList) {
            this.uniqueError = this.list && this.list.indexOf(this.newTagItem) > -1;
        } else {
            this.uniqueError = false;
        }
    }
}
