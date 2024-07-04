import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioArtistasComponent } from './formulario-artistas.component';

describe('FormularioArtistasComponent', () => {
  let component: FormularioArtistasComponent;
  let fixture: ComponentFixture<FormularioArtistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioArtistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
