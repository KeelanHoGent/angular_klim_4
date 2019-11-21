import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPdfComponent } from './config-pdf.component';

describe('ConfigPdfComponent', () => {
  let component: ConfigPdfComponent;
  let fixture: ComponentFixture<ConfigPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
