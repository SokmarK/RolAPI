import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalsaChokeComponent } from './salsa-choke.component';

describe('SalsaChokeComponent', () => {
  let component: SalsaChokeComponent;
  let fixture: ComponentFixture<SalsaChokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalsaChokeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalsaChokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
