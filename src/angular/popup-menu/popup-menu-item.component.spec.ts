import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupMenuListComponent } from './popup-menu-list.component';

describe('Popup Menu', () => {
    let component: PopupMenuListComponent;
    let fixture: ComponentFixture<PopupMenuListComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PopupMenuListComponent ],
        }).compileComponents();
        fixture = TestBed.createComponent(PopupMenuListComponent);
        component = fixture.componentInstance;
    }));

    it('Popup menu component should be created', () => {
        expect(component).toBeTruthy();
    });

    it('Set Position to Popup Menu', () => {
        expect(component.position).toEqual({ x: 0, y: 0 })
    });
})
