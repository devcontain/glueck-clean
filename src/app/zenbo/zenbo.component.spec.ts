import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenboComponent } from './zenbo.component';

describe('ZenboComponent', () => {
  let component: ZenboComponent;
  let fixture: ComponentFixture<ZenboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZenboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
