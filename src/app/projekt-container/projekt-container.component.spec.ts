import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektContainerComponent } from './projekt-container.component';

describe('ProjektContainerComponent', () => {
  let component: ProjektContainerComponent;
  let fixture: ComponentFixture<ProjektContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjektContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjektContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
