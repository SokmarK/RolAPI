import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPopularComponent } from './child-popular.component';

describe('ChildPopularComponent', () => {
  let component: ChildPopularComponent;
  let fixture: ComponentFixture<ChildPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildPopularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
