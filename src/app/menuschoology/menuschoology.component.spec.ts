import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuschoologyComponent } from './menuschoology.component';

describe('MenuschoologyComponent', () => {
  let component: MenuschoologyComponent;
  let fixture: ComponentFixture<MenuschoologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuschoologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuschoologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
