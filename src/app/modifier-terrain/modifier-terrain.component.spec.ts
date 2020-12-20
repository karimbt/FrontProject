import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTerrainComponent } from './modifier-terrain.component';

describe('ModifierTerrainComponent', () => {
  let component: ModifierTerrainComponent;
  let fixture: ComponentFixture<ModifierTerrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTerrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
