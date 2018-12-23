export const template = `
<div class="modal-background" [@toggleBackground]="modalVisible" ></div>
<div class="sdc-modal {{size}}">
    <div class="sdc-modal__wrapper sdc-modal-type-{{type}}" [@toggleModal]="modalVisible" (@toggleModal.done)="modalToggled($event)">

        <div class="sdc-modal__header sdc-{{type}}__header">
            <div class="sdc-modal__icon" *ngIf="type!='custom'" [innerHtml]="svgIconContentSafeHtml"></div>

            <div *ngIf="title" class="title" >
            {{ title }}
            <svg-icon
              *ngIf="titleIcon"
              [name]="titleIcon.iconName"
              [mode]="titleIcon.iconMode"
              [size]="titleIcon.iconSize">
            </svg-icon>
            </div>
            <sdc-modal-close-button #modalCloseButton [testId]="'close' | calculateTestId : testId" [modalInstanceRef]="instanceRef"></sdc-modal-close-button>
        </div>

        <div class="sdc-modal__content">
                <div *ngIf="message" [innerHtml]="message"></div>
                <div #dynamicContentContainer></div>
                <div class="disabled-modal" *ngIf="isDisabled"></div>
        </div>

        <div class="sdc-modal__footer">
            <sdc-modal-button *ngFor="let button of buttons"
                [text]="button.text"
                [type]="button.type || 'primary'"
                [disabled]="button.disabled"
                [size] = "button.size ? button.size : 'default'"
                [closeModal]="button.closeModal"
                [spinner_position]="button.spinner_position"
                [show_spinner]="button.show_spinner"
                [callback]="button.callback"
                [testId]="'button-' + button.text | calculateTestId : testId"
                (closeModalEvent)="closeModal()"
                >
            </sdc-modal-button>
        </div>

    </div>
</div>
`;
