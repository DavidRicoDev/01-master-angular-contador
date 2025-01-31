import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ["./button-add.component.css"],

})
export class ButtonAddComponent {

  @Input()
  contador: number = 0;

  @Output()
   onAdd: EventEmitter<number> = new EventEmitter();

  add(){
    this.contador++;
    this.onAdd.emit(this.contador);
  }
  
  }
