import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVSectionComponent } from './cvsection.component';

describe('CVSectionComponent', () => {
  let component: CVSectionComponent;
  let fixture: ComponentFixture<CVSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CVSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CVSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
