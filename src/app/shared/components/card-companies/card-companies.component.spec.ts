import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompaniesComponent } from './card-companies.component';

describe('CardCompaniesComponent', () => {
  let component: CardCompaniesComponent;
  let fixture: ComponentFixture<CardCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardCompaniesComponent]
    });
    fixture = TestBed.createComponent(CardCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
