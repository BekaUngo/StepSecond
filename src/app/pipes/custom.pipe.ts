import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'nameTransform'
})
export class CustomPipe implements PipeTransform {
    transform(value: any) {
        if(value == null){
            return value
        } else {
            return value + " " + 'StepAcademy'
        }
    }
}