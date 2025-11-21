import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BewegungComponent } from './bewegung.component';

describe('BewegungComponent', () => {
  let component: BewegungComponent;
  let fixture: ComponentFixture<BewegungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BewegungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BewegungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
