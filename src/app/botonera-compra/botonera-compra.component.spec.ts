import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraCompraComponent } from './botonera-compra.component';

describe('BotoneraCompraComponent', () => {
  let component: BotoneraCompraComponent;
  let fixture: ComponentFixture<BotoneraCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoneraCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoneraCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
