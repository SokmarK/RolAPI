import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaAdminComponent } from './musica-admin.component';

describe('MusicaAdminComponent', () => {
  let component: MusicaAdminComponent;
  let fixture: ComponentFixture<MusicaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
