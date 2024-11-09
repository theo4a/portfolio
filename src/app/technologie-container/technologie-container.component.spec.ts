import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologieContainerComponent } from './technologie-container.component';

describe('TechnologieContainerComponent', () => {
  let component: TechnologieContainerComponent;
  let fixture: ComponentFixture<TechnologieContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologieContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologieContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
