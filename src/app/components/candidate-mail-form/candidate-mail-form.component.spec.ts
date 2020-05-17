import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateMailFormComponent } from './candidate-mail-form.component';

describe('CandidateMailFormComponent', () => {
  let component: CandidateMailFormComponent;
  let fixture: ComponentFixture<CandidateMailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateMailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateMailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
