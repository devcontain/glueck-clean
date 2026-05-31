import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunflowerTestComponent } from './sunflower-test.component';

describe('SunflowerTestComponent', () => {
  let component: SunflowerTestComponent;
  let fixture: ComponentFixture<SunflowerTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunflowerTestComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SunflowerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
