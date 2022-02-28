import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieupdateComponent } from './movieupdate.component';

describe('MovieupdateComponent', () => {
  let component: MovieupdateComponent;
  let fixture: ComponentFixture<MovieupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
