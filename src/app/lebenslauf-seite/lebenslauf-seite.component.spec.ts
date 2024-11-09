import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LebenslaufSeiteComponent } from './lebenslauf-seite.component';

describe('LebenslaufSeiteComponent', () => {
  let component: LebenslaufSeiteComponent;
  let fixture: ComponentFixture<LebenslaufSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LebenslaufSeiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LebenslaufSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
