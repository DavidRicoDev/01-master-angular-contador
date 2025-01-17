import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  standalone: true,
  imports: [],
  templateUrl: './button-dis.component.html',
  styleUrls: ["./button-dis.component.css"],
})
export class ButtonDisComponent {
  
  @Input()
  contador: number = 0;

  @Output()
   onDis: EventEmitter<number> = new EventEmitter();

  dis(){
    this.contador--;
    this.onDis.emit(this.contador);
  }

}

