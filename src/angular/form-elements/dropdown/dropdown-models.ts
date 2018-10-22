export enum DropDownTypes {
    Regular = "Regular",
    Auto = "Auto"
}

export enum DropDownOptionType {
    Simple = "Simple", // default
    Header = "Header",
    Disable = "Disable",
    HorizontalLine = "HorizontalLine"
}

export interface IDropDownOption {
    value: any;
    label: string;
    type?: DropDownOptionType;
}
