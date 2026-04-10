import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowArrowLeftComponent } from './yellow-arrow-left.component';

describe('YellowArrowLeftComponent', () => {
  let component: YellowArrowLeftComponent;
  let fixture: ComponentFixture<YellowArrowLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YellowArrowLeftComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(YellowArrowLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
