import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaMangasComponent } from './tienda-mangas.component';

describe('TiendaMangasComponent', () => {
  let component: TiendaMangasComponent;
  let fixture: ComponentFixture<TiendaMangasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaMangasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
