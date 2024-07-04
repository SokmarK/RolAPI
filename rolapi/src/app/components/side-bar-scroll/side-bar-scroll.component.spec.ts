import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarScrollComponent } from './side-bar-scroll.component';

describe('SideBarScrollComponent', () => {
  let component: SideBarScrollComponent;
  let fixture: ComponentFixture<SideBarScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
