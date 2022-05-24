import {Component,Input} from '@angular/core';

@Component({
    selector:'fa-other',
    template:'<-contentngng'
    
})

export class OtherComponent{
    @Input()  msg="message from other component";
}