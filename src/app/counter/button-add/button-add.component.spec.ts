import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
    let component: ButtonAddComponent;
    let fixture: ComponentFixture<ButtonAddComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
      imports: [ButtonAddComponent]
      }).compileComponents();
    });
    
      beforeEach(async () => {
      fixture = TestBed.createComponent(ButtonAddComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("Debe emitir el valor de 1", () => {
      let nuevoContador = 0;
      component.onAdd.subscribe(contador => {
          nuevoContador = contador;
      })
      component.add();
      expect(nuevoContador).toBe(1);
        
    })

});
