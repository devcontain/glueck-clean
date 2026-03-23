import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResilienzComponent } from './resilienz.component';

describe('ResilienzComponent', () => {
  let component: ResilienzComponent;
  let fixture: ComponentFixture<ResilienzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResilienzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResilienzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
