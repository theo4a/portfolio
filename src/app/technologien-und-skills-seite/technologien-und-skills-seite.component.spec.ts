import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologienUndSkillsSeiteComponent } from './technologien-und-skills-seite.component';

describe('TechnologienUndSkillsSeiteComponent', () => {
  let component: TechnologienUndSkillsSeiteComponent;
  let fixture: ComponentFixture<TechnologienUndSkillsSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologienUndSkillsSeiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologienUndSkillsSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
