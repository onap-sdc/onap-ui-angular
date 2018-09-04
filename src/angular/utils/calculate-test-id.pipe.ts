import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'calculateTestId'})
export class CalculateTestIdPipe implements PipeTransform {
    transform(value:string, containerTestId:string) : string {
        return containerTestId + '-' + value.toLowerCase().split(' ').join('-');
    }
}