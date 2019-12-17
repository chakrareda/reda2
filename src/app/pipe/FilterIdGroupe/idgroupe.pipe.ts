import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idgroupe'
})
export class IdgroupePipe implements PipeTransform {

  transform(values: any, id:number ): any {
    return values.filter((contact) => contact.idgroupe === id);
  }

}
