import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarContainerComponent } from './menubar-container.component';

describe('MenubarContainerComponent', () => {
  let component: MenubarContainerComponent;
  let fixture: ComponentFixture<MenubarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
