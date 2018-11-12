import { Component, Input, AfterContentInit, ContentChildren, QueryList, HostBinding, EventEmitter, Output } from '@angular/core';
import { TabComponent } from './children/tab.component';
import { Mode, Size } from './../common/enums';
import { template } from "./tabs.component.html";

@Component({
    selector: 'sdc-tabs',
    template: template
})

export class TabsComponent implements AfterContentInit {

    @HostBinding('class') classes = 'sdc-tabs sdc-tabs-header';
    @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;
    @Input() public testId: string;
    @Input() public iconsSize: Size = Size.medium;
    @Output() public selectedTab: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();

    public selectTab(tab: TabComponent) {
        this.selectedTab.emit(tab);
        // deactivate all tabs
        this.tabs.toArray().forEach((_tab: TabComponent) => {
            _tab.active = false;
            _tab.titleIconMode = Mode.secondary;
        });

        // activate the tab the user has clicked on.
        tab.active = true;
        tab.titleIconMode = Mode.primary;
    }

    public ngAfterContentInit() {
        // get all active tabs
        const activeTabs = this.tabs.filter((tab) => tab.active);

        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

}
