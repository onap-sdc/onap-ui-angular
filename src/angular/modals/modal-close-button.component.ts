import { Component, ComponentRef, Input } from "@angular/core";
import { ModalService } from "./modal.service";
import { RippleAnimationAction } from "../utils/animations/ripple-click.animation.directive";
import { ModalComponent } from "./modal.component";
import { ButtonComponent } from "../buttons/button.component";

@Component({
    selector: "sdc-modal-close-button",
    template: `
    <div class="sdc-modal__close-button"
        SdcRippleClickAnimation
        [ngClass]="disabled ? 'disabled' : ''"
        [rippleOnAction]="!disabled && rippleAnimationAction"
        [attr.data-tests-id]="testId"
        (click)="!disabled && closeModal('close')"
        >
        <svg-icon name="close" [mode]="disabled? 'secondary' : 'info'" size="medium"></svg-icon>
    </div>
    `
})
export class ModalCloseButtonComponent extends ButtonComponent {

    @Input() testId: string;
    @Input() disabled: boolean;
    @Input() modalInstanceRef: ComponentRef<ModalComponent>;

    public rippleAnimationAction: RippleAnimationAction = RippleAnimationAction.MOUSE_ENTER;

    constructor(private modalService: ModalService) {
        super();
    }

    public closeModal = (btnName : string): void => {
        this.modalInstanceRef.instance.closeModal(btnName);
    }

}
