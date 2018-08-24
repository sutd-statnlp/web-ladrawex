import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { DrawexService } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  canvas: fabric.Canvas
  latex: string;
  constructor(private drawexService: DrawexService) {
    this.latex = ''
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
      fill: '#FFFFFF',
      lockRotation: true,
      stroke: '#000000',
      strokeWidth: 1
    });
  }

  newCircle(): fabric.Circle {
    return new fabric.Circle({
      top: 40,
      left: 10,
      radius: 20,
      fill: '#FFFFFF',
      lockRotation: true,
      stroke: '#000000',
      strokeWidth: 1
    });
  }

  addCircle(): boolean {
    let circle = this.newCircle()
    return this.canvas.add(circle) != null;
  }

  newLine(): fabric.Line {
    return new fabric.Line([50, 50, 200, 50], {
      top: 10,
      left: 10,
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
      fill: '#000000',
      lockRotation: true,
      fontSize: 20
    });
  }

  addText(): boolean {
    let text = this.newText()
    return this.canvas.add(text) != null;
  }

  exportLatex(): boolean {
    let objects = this.canvas.getObjects()
    this.drawexService.getLatexDoc(objects).then((doc) => {
      this.latex = doc;
    })
    return true;
  }

  clearDrawing(): boolean {
    return this.canvas.clear() != null;
  }
}
