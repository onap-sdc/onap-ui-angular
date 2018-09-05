import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'calculateTestId'})
export class CalculateTestIdPipe implements PipeTransform {
    transform(value:string, containerTestId:string) : string {
        if (!value) {
          return "";
        }
        if (!containerTestId) {
          return value.toLowerCase().split(' ').join('-');
        }
        return containerTestId + '-' + value.toLowerCase().split(' ').join('-');
    }
}
