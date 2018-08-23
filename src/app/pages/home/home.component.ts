import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  canvas: fabric.Canvas
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.canvas = new fabric.Canvas('canvas');
  }

  addRectangle(): boolean {
    let rect = this.newRectangle();
    return this.canvas.add(rect) != null
  }

  newRectangle(): fabric.Rect {
    return new fabric.Rect({
      top: 100,
      left: 100,
      width: 40,
      height: 40,
      fill : '#000000',
      lockRotation: true
    });
  }

  newCircle(): fabric.Circle {
    return new fabric.Circle({
      top: 10,
      left: 10,
      radius: 20,
      fill : '#000000',
      lockRotation: true
    });
  }

  addCircle(): boolean{
    console.log('add circle')
    let circle = this.newCircle()
    return this.canvas.add(circle) != null;
  }

  newLine(): fabric.Line {
    return new fabric.Line([50, 50, 200, 50], {
      top: 10,
      left: 10,
      fill : '#000000',
      strokeWidth: 2,
      stroke: '#000000',
      hasControls: true,
      hasRotatingPoint: true,
    });
  }

  addLine(): boolean {
    let line = this.newLine()
    return this.canvas.add(line) != null;
  }

  newText(): fabric.IText {
    return new fabric.IText('text', {
      top: 20,
      left: 20,
      fill : '#000000',
      lockRotation: true,
      fontSize: 20
    });
  }

  addText(): boolean {
    let text = this.newText()
    return this.canvas.add(text) != null;
  }
}
