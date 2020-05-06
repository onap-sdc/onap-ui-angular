import { Component, Input, HostBinding } from "@angular/core";
import {template} from "./chars-ellipsis.components.html"

@Component({
    selector: 'chars-ellipsis',
    template: template
})

export class CharsEllipsisComponent {
    @HostBinding('attr.data-tests-id') dataTestId: string;

    @Input() public text: string;
    @Input() public maxChars: number;
    @Input() public testId: string;
    private collapsed: boolean;
    private elipsisText: string;
    public displayText: string;

    constructor() {
    }

    ngOnInit(): void {
        if(this.longText()){
            this.collapsed = true;
            this.elipsisText = this.text.substr(0, this.maxChars) + '...';
            this.toggleText();
        }
        else {
            this.displayText = this.text;
        }
        this.dataTestId = this.testId;
    }

    toggleText (): void {
        this.displayText = this.collapsed ? this.elipsisText : this.text;
    };
    clickMoreLessLink(){
        this.collapsed = !this.collapsed;
        this.toggleText();
    }
    longText() {
        return this.text && this.maxChars && this.text.length > this.maxChars;
    }
}
