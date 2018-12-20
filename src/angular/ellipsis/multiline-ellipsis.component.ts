import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import { template } from './multiline-ellipsis.component.html';

declare const window: any;

@Component({
	selector: 'multiline-ellipsis',
	template: template
})

export class MultilineEllipsisComponent implements OnInit, AfterViewInit {

	@Input() public lines: number;
	@Input() public lineHeight: string;
	@Input() public className: string;
	@Input() public testId: string;
	@Output() public hasEllipsisChanged: EventEmitter<boolean>;

	@ViewChild('multilineEllipsisContainer') public elmContainer: ElementRef;
	@ViewChild('multilineEllipsisContent') public elmContent: ElementRef;

	public stylesContainer: { [key: string]: string };
	public stylesContent: { [key: string]: string };
	public stylesDots: { [key: string]: string };

	private hasEllipsis: boolean;

	public constructor() {
		this.hasEllipsisChanged = new EventEmitter<boolean>();
	}

	ngOnInit() {
		this.prepareStyles();
	}

	ngAfterViewInit() {
		this.emitEllipsisStatus();
	}

	public emitEllipsisStatus() {
		this.hasEllipsis = (this.elmContainer.nativeElement.offsetHeight < this.elmContent.nativeElement.offsetHeight);
		this.hasEllipsisChanged.emit(this.hasEllipsis);
	}

	private prepareStyles() {
		const lineHeight = this.lineHeight || this.getLineHeight();
		this.stylesContainer = {
			'max-height': `calc(${this.lines} * ${lineHeight})`
		};
		this.stylesContent = {
			'max-height': `calc(${this.lines + 1} * ${lineHeight})`
		};
		this.stylesDots = {
			'top': `calc(${2 * this.lines} * ${lineHeight} - 100%)`
		};
	}

	private getLineHeight() {
		return window.getComputedStyle(this.elmContainer.nativeElement)['line-height'];
	}

}
