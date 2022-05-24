import { Component,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClickedIrfan()">Click For Custome Event</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output('clickable') clicked=new EventEmitter<string>();//Event Defination with data type is carries

  onClickedIrfan(){
    alert('It Worked!');
    this.clicked.emit('$evenCustom event Fired');//trigger custom event
  }
}