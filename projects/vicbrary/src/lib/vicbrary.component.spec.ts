import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VicbraryComponent } from './vicbrary.component';

describe('VicbraryComponent', () => {
  let component: VicbraryComponent;
  let fixture: ComponentFixture<VicbraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VicbraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VicbraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
