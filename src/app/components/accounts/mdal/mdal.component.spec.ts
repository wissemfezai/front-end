import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdalComponent } from './mdal.component';

describe('MdalComponent', () => {
  let component: MdalComponent;
  let fixture: ComponentFixture<MdalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
