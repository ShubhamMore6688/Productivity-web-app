import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDeletionConfirmComponent } from './file-deletion-confirm.component';

describe('FileDeletionConfirmComponent', () => {
  let component: FileDeletionConfirmComponent;
  let fixture: ComponentFixture<FileDeletionConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileDeletionConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileDeletionConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
