import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemPageComponent } from './edit-item-page.component';

describe('EditItemPageComponent', () => {
  let component: EditItemPageComponent;
  let fixture: ComponentFixture<EditItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
