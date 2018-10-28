import { Component, Input } from "@angular/core";
import {template} from "./chars-ellipsis.components.html"

@Component({
    selector: 'chars-ellipsis',
    template: template
})

export class CharsEllipsisComponent {
    @Input() public text: string;
    @Input() public maxChars: number;
    private collapsed: boolean;
    private elipsisText: string;
    private dispalyText: string;

    constructor() {
    }

    ngOnInit(): void {
        if(this.longText()){
            this.collapsed = true;
            this.elipsisText = this.text.substr(0, this.maxChars) + '...';
            this.toggleText();
        }
        else {
            this.dispalyText = this.text;
        }
    }

    toggleText (): void {
        this.dispalyText = this.collapsed ? this.elipsisText : this.text;
    };
    clickMoreLessLink(){
        this.collapsed = !this.collapsed;
        this.toggleText();
    }
    longText() {
        return this.text && this.maxChars && this.text.length > this.maxChars;
    }
}
