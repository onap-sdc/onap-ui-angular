import { Pipe, PipeTransform } from '@angular/core';
import {IDropDownOption} from "../form-elements/dropdown/dropdown-models";

@Pipe ({
    name: 'AutocompletePipe',
})
export class AutocompletePipe implements PipeTransform {
    public transform(data: IDropDownOption[], text: string) {
        if (!text || !text.length) {
            return data;
        }
        return data.filter((item: IDropDownOption) => {
            return item.value.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
    }
}
