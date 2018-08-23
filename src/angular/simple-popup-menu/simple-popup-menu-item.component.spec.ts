import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimplePopupMenuListComponent } from './simple-popup-menu-list.component';

describe('Popup Menu', () => {
    let component: SimplePopupMenuListComponent;
    let fixture: ComponentFixture<SimplePopupMenuListComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SimplePopupMenuListComponent ],
        }).compileComponents();
        fixture = TestBed.createComponent(SimplePopupMenuListComponent);
        component = fixture.componentInstance;
    }));

    it('simple popup menu component should be created', () => {
        expect(component).toBeTruthy();
    });

    it('Set Position to Simple Popup Menu', () => {
        expect(component.position).toEqual({ x: 0, y: 0 })
    });
})
