import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptLogicalComponent } from './javascript-logical.component';

describe('JavascriptLogicalComponent', () => {
  let component: JavascriptLogicalComponent;
  let fixture: ComponentFixture<JavascriptLogicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavascriptLogicalComponent]
    });
    fixture = TestBed.createComponent(JavascriptLogicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
