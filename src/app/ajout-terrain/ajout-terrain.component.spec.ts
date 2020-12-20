import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTerrainComponent } from './ajout-terrain.component';

describe('AjoutTerrainComponent', () => {
  let component: AjoutTerrainComponent;
  let fixture: ComponentFixture<AjoutTerrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutTerrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
