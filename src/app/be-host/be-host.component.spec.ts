import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeHostComponent } from './be-host.component';

describe('BeHostComponent', () => {
  let component: BeHostComponent;
  let fixture: ComponentFixture<BeHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
