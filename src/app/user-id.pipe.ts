import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userIdPipe'
})
export class UserIdPipe implements PipeTransform {

  transform(value: number, id: number): any {
    return null;
  }

}
