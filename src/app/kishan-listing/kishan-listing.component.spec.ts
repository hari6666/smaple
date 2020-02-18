import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KishanListingComponent } from './kishan-listing.component';

describe('KishanListingComponent', () => {
  let component: KishanListingComponent;
  let fixture: ComponentFixture<KishanListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KishanListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KishanListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
