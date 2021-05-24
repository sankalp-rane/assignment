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
      if (user.email == filterString || user.username == filterString || user.company.name == filterString)
        result.push(user);
    }
    return result;
  }

}
