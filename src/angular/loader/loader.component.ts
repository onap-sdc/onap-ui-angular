import { Component, Input, ViewContainerRef, Inject, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";
import { template } from "./loader.component.html";
import { LoaderService } from "./loader.service";

export enum LoaderSize {
    large = 'large',
    medium = 'medium',
    small = 'small',
}

@Component({
    selector: "sdc-loader",
    template: template
})

export class LoaderComponent implements OnInit, OnDestroy {
    @Input() active: number;
    @Input() size?: LoaderSize; // small || medium || large
    @Input() global?: boolean; // If is relative is set to true, loader will appear over parent element. Otherwise, will be fixed over the entire page.
    @Input() name?: string;
    @Input() testId: string;
    @Input() relative: boolean; // If is relative is set to true, loader will appear over parent element. Otherwise, will be fixed over the entire page.
    @Output() activeChange: EventEmitter<number> = new EventEmitter<number>();
    private offset : {
      top: string;
      left: string;
      width: string;
      height: string;
    };

    constructor(private loaderService: LoaderService, private viewContainerRef: ViewContainerRef) {
        this.active = 0;
        this.size = LoaderSize.large;
        this.global = false;
    }

    public ngOnInit(): void {
        if (this.name !== undefined) {
            this.loaderService.register(this.name, this);
        }
        this.setLoaderPlace();
    }

    public ngOnDestroy(): void {
        if (this.name !== undefined) {
            this.loaderService.unregister(this.name);
        }
    }

    public activate() {
        this.active++;
        this.activeChange.emit(this.active);
    }

    public deactivate() {
        if (this.active > 0) {
            this.active--;
            this.activeChange.emit(this.active);
        }
    }
    public setLoaderPlace = () => {
      if (this.relative === true) {
        let parentElement = this.viewContainerRef.element.nativeElement.parentElement;
        this.offset = {
            left: (parentElement.offsetLeft !== undefined) ? parentElement.offsetLeft + "px" : undefined,
            top: (parentElement.offsetTop !== undefined) ? parentElement.offsetTop + "px" : undefined,
            width: (parentElement.offsetWidth !== undefined) ? parentElement.offsetWidth + "px" : undefined,
            height: (parentElement.offsetHeight !== undefined) ? parentElement.offsetHeight + "px" : undefined
        };
    } else {
        this.offset = {
            left: '0px',
            top: '0px',
            width: '100%',
            height: '100%'
        }
    }
    }

}
