import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildVallenatoComponent } from './child-vallenato.component';

describe('ChildVallenatoComponent', () => {
  let component: ChildVallenatoComponent;
  let fixture: ComponentFixture<ChildVallenatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildVallenatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildVallenatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
