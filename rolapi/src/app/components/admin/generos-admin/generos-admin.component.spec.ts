import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosAdminComponent } from './generos-admin.component';

describe('GenerosAdminComponent', () => {
  let component: GenerosAdminComponent;
  let fixture: ComponentFixture<GenerosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerosAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
