import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoardHomeComponent } from './dashoard-home.component';

describe('DashoardHomeComponent', () => {
  let component: DashoardHomeComponent;
  let fixture: ComponentFixture<DashoardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashoardHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashoardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
