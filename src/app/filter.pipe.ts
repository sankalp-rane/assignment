import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    // console.log(filterString);
    if (filterString === '')
      return value;
    const result = [];
    // console.log(value);
    for (let user of value) {
      // console.log(user);
      if ((user.email).toLowerCase().includes(filterString.toLowerCase()) || (user.username).toLowerCase().includes(filterString.toLowerCase()) || (user.company.name).toLowerCase().includes(filterString.toLowerCase()))
        result.push(user);
    }
    return result;
  }

}
