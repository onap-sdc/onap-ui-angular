import { IButtonComponent } from "../../buttons/ibutton.interface";

export interface IModalConfig {
    size?: string; // xl|l|md|sm|xsm
    title?: string;
    titleIcon?: TitleIconDetails;
    message?: string;
    buttons?: IModalButtonComponent[];
    testId?: string;
    type?: ModalType;
}

export interface IModalButtonComponent extends IButtonComponent {
    id?: string;
    callback?: () => void;
    closeModal?: boolean;
}

export interface TitleIconDetails {
    iconName?: string;
    iconMode?: string;
    iconSize?: string;
}

export enum ModalType {
    info = 'info',
    warning = 'warning',
    error = 'error',
    success = 'success',
    action = 'action',
    custom = 'custom'
}

export enum ModalSize {
    xlarge = "xl",
    large = "l",
    medium = "md",
    small = "sm",
    xsmall = "xsm"
}


