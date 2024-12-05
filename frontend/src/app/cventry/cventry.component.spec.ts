import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVEntryComponent } from './cventry.component';

describe('CVEntryComponent', () => {
  let component: CVEntryComponent;
  let fixture: ComponentFixture<CVEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CVEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CVEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
