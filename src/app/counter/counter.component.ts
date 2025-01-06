import { Component } from "@angular/core";
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonDisComponent } from "./button-dis/button-dis.component";

@Component({
    standalone: true,
    selector: "app-contador",
    imports: [ButtonAddComponent, ButtonDisComponent],
    templateUrl: "./counter.component.html",
    styleUrls: ["./counter.component.css"],
})
export class CounterComponent{
  
  contador: number  = 4;

  handleCount(value: number){
    this.contador = value;
  }

}
