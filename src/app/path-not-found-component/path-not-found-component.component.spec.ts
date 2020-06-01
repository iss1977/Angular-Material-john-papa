import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathNotFoundComponentComponent } from './path-not-found-component.component';

describe('PathNotFoundComponentComponent', () => {
  let component: PathNotFoundComponentComponent;
  let fixture: ComponentFixture<PathNotFoundComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathNotFoundComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathNotFoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
