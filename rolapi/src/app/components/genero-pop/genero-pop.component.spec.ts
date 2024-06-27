import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroPopComponent } from './genero-pop.component';

describe('GeneroPopComponent', () => {
  let component: GeneroPopComponent;
  let fixture: ComponentFixture<GeneroPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroPopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
