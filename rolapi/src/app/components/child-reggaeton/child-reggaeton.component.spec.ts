import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildReggaetonComponent } from './child-reggaeton.component';

describe('ChildReggaetonComponent', () => {
  let component: ChildReggaetonComponent;
  let fixture: ComponentFixture<ChildReggaetonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildReggaetonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildReggaetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
