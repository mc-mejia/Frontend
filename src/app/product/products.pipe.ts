import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    //console.log(value);
   // console.log(args);
    return args ? value.filter((item,index)=>{
      if(item.productName.toLowerCase().indexOf(args)!=-1){
        return true;
      }
    })
    :value;
  }

}
