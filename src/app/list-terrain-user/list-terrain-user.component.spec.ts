import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTerrainUserComponent } from './list-terrain-user.component';

describe('ListTerrainUserComponent', () => {
  let component: ListTerrainUserComponent;
  let fixture: ComponentFixture<ListTerrainUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTerrainUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTerrainUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
