import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsMainComponent } from './graphs-main.component';

describe('GraphsMainComponent', () => {
  let component: GraphsMainComponent;
  let fixture: ComponentFixture<GraphsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphsMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
