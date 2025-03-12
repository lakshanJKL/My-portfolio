import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangNavbarComponent } from './lang-navbar.component';

describe('LangNavbarComponent', () => {
  let component: LangNavbarComponent;
  let fixture: ComponentFixture<LangNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LangNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
