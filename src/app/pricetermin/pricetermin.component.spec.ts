import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceterminComponent } from './pricetermin.component';

describe('PriceterminComponent', () => {
  let component: PriceterminComponent;
  let fixture: ComponentFixture<PriceterminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceterminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceterminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
