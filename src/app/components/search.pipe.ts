import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { __values } from 'tslib';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any,args: any): any {
    if(!value)return null
    if(!args) return value 

    console.log('value', value, 'args', args);

    return value.filter((item:any)=>{
      
    return item.age >= args;
    }) 
  }
} 
