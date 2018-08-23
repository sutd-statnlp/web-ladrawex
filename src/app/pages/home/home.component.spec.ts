import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FakeShareModule } from 'test';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FakeShareModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addRectangle should add a rectangle into canvas and return true', () => {
    expect(component.addRectangle()).toBeTruthy();
  })

  it('newRectangle should create a rectangle', () => {
    expect(component.newRectangle()).not.toBeNull();
  })

  it('should have a canvas', () => {
    expect(component.canvas).not.toBeNull();
  })

  it('newCircle should creates new circle', ()=> {
    expect(component.newCircle()).not.toBeNull()
  })

  it('addCircle should add a circle into canvas and return true', () => {
    expect(component.addCircle()).toBeTruthy()
  })

  it('newLine should creates new line', () => {
    expect(component.newLine()).not.toBeNull()
  })

  it('addLine should add a line into canvas', () => {
    expect(component.addLine()).toBeTruthy()
  })

  it('newText should create a new text', ()=> {
    expect(component.newText()).not.toBeNull()
  })

  it('addText should add a text into canvas', () => {
    expect(component.addText()).toBeTruthy()
  })

  it('should have latex', () => {
    expect(component.latex).not.toBeNull()
  })

  it('exportLatex should get latex from back end and return true', () => {
    expect(component.exportLatex()).toBeTruthy()
  })

  it('clearDrawing should clear thr drawing and return true', () => {
    expect(component.clearDrawing()).toBeTruthy()
  })
});
