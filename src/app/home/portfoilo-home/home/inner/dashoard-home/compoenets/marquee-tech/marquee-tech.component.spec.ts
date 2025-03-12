import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeTechComponent } from './marquee-tech.component';

describe('MarqueeTechComponent', () => {
  let component: MarqueeTechComponent;
  let fixture: ComponentFixture<MarqueeTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueeTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarqueeTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
