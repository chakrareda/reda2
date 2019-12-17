import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMail'
})
export class FilterMailPipe implements PipeTransform {


  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((mail) => ( mail.mail_recepteur.toLowerCase().includes(searchText) ))
  }
}
