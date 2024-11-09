import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LebenslaufKategorieContainerComponent } from './lebenslauf-kategorie-container.component';

describe('LebenslaufKategorieContainerComponent', () => {
  let component: LebenslaufKategorieContainerComponent;
  let fixture: ComponentFixture<LebenslaufKategorieContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LebenslaufKategorieContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LebenslaufKategorieContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
