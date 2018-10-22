export const template = `
<div (clickOutside)="closeListOptions()" class="sdc-dropdown" #dropDownWrapper [attr.data-tests-id]="testId"
    [ngClass]="{
    'sdc-dropdown__error': (!valid && dirty),
    'open-bottom': show && bottomVisible,
    'open-top':show && !bottomVisible}">
    <label *ngIf="label" class="sdc-dropdown__label" [ngClass]="{'required':required}">{{label}}</label>
    <div class="sdc-dropdown__component-container">

        <!--[DROP-DOWN AUTO HEADER START]-->
        <div *ngIf="type===cIDropDownTypes.Auto" class="sdc-dropdown-auto__wrapper">
            <input class="sdc-dropdown__header js-sdc-dropdown--toggle-hook"
                    [(ngModel)]="this.filterValue"
                    (ngModelChange)="filterOptions(this.filterValue)"
                    placeholder="{{this.selectedOption?.label || this.selectedOption?.value || placeHolder}}">
                <svg-icon name="caret1-down-o" mode="secondary" size="small" (click)="toggleDropdown($event)"></svg-icon>
        </div>
        <!--[DROP-DOWN AUTO HEADER END]-->

        <!--[DROP-DOWN REGULAR HEADER START]-->
        <button *ngIf="type===cIDropDownTypes.Regular"
                class="sdc-dropdown__header js-sdc-dropdown--toggle-hook"
                (click)="toggleDropdown($event)"
                [ngClass]="{'disabled': disabled, 'placeholder':!this.selectedOption}">
                {{ this.selectedOption?.label || this.selectedOption?.value || placeHolder}}
            <svg-icon name="caret1-down-o" mode="secondary" size="small"></svg-icon>
        </button>

        <dropdown-results *ngIf="show" [options]="options" [isGroupDesign]="isGroupDesign" [selectedOption]="selectedOption" (onItemSelected)="selectOption($event)"></dropdown-results>
    </div>
</div>
`;
