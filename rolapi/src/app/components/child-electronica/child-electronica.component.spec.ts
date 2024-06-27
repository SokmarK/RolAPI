import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildElectronicaComponent } from './child-electronica.component';

describe('ChildElectronicaComponent', () => {
  let component: ChildElectronicaComponent;
  let fixture: ComponentFixture<ChildElectronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildElectronicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
