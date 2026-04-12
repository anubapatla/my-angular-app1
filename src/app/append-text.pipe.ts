import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendText'
})
export class AppendTextPipe implements PipeTransform {

  transform(arr:number[],sortOrder:'asc'|'desc'): number[]{
    if(sortOrder === 'asc'){
      return arr.sort((a,b)=>a-b);
    }else{
      return arr.sort((a,b)=>b-a);
    }
  }

}
