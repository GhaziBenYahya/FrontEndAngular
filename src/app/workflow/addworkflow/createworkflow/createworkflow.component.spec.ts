import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateworkflowComponent } from './createworkflow.component';

describe('CreateworkflowComponent', () => {
  let component: CreateworkflowComponent;
  let fixture: ComponentFixture<CreateworkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateworkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateworkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
