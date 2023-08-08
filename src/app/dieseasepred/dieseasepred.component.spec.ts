import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieseasepredComponent } from './dieseasepred.component';

describe('DieseasepredComponent', () => {
  let component: DieseasepredComponent;
  let fixture: ComponentFixture<DieseasepredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieseasepredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieseasepredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
