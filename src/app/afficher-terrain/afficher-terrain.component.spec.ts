import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTerrainComponent } from './afficher-terrain.component';

describe('AfficherTerrainComponent', () => {
  let component: AfficherTerrainComponent;
  let fixture: ComponentFixture<AfficherTerrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherTerrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
