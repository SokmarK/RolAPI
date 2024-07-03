import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMusicaComponent } from './formulario-musica.component';

describe('FormularioMusicaComponent', () => {
  let component: FormularioMusicaComponent;
  let fixture: ComponentFixture<FormularioMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMusicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
