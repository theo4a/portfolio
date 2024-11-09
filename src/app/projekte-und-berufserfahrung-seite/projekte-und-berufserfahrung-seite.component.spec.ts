import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekteUndBerufserfahrungSeiteComponent } from './projekte-und-berufserfahrung-seite.component';

describe('ProjekteUndBerufserfahrungSeiteComponent', () => {
  let component: ProjekteUndBerufserfahrungSeiteComponent;
  let fixture: ComponentFixture<ProjekteUndBerufserfahrungSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjekteUndBerufserfahrungSeiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjekteUndBerufserfahrungSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
