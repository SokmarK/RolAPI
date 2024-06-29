import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasAdminComponent } from './artistas-admin.component';

describe('ArtistasAdminComponent', () => {
  let component: ArtistasAdminComponent;
  let fixture: ComponentFixture<ArtistasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistasAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
