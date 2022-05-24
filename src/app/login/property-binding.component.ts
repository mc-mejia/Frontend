import {Component,Input} from '@angular/core';

@Component({
    selector:'fa-propertyBinding',
    template:'{{result}}'
    
})

export class PropertyBindingComponent{
     @Input() result:number=0;
}