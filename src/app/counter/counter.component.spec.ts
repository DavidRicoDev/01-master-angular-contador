import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CounterComponent } from "./counter.component"

describe("CounterComponent unit", () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        }).compileComponents();
    });

    it("Se debe crear el componente Counter", () => {
        const fixture = TestBed.createComponent(CounterComponent);
        expect(fixture.componentInstance).toBeTruthy();
    });

    it("Debe crear texto Counter: 4", () => {
        const fixture = TestBed.createComponent(CounterComponent);
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.nativeElement;

        expect(compiled.querySelector("h1")?.textContent).toEqual("Contador: 4");
    });

    it("Valor inicial del contador es 4", () => {
        const counter = new CounterComponent();
        expect(counter.contador).toBe(4);
    });
}); 

describe("integration Testing", ()=>{

    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    
    it("Evento click", () =>{
        const compiled = fixture.nativeElement;

        const counterValue = compiled.querySelector("h1")!;

        const btnAdd = fixture.debugElement.nativeElement.querySelector("#add");

        btnAdd.click();

        fixture.detectChanges();

        expect(counterValue?.textContent).toEqual("Contador: 5");

    })

    it("Evento click", () =>{
        const compiled = fixture.nativeElement;

        const counterValue = compiled.querySelector("h1")!;

        const btnDis = fixture.debugElement.nativeElement.querySelector("#dis");

        btnDis.click();

        fixture.detectChanges();

        expect(counterValue?.textContent).toEqual("Contador: 3");

    })
});
