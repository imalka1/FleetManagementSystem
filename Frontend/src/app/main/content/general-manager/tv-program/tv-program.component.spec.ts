import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvProgramComponent } from './tv-program.component';

describe('TvProgramComponent', () => {
  let component: TvProgramComponent;
  let fixture: ComponentFixture<TvProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
