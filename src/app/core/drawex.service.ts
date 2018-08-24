import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { fabric } from 'fabric';
import { HttpClient } from '@angular/common/http';
import { API_URL, HTTP_OPTIONS } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class DrawexService {
  canvas: any
  constructor(private http: HttpClient) {
    this.canvas = {
      width: 400,
      height: 400,
      positionPortion: 30,
      sizePortion: 4,
      thickPortion: 2,
    }
  }
  getRequestText(text: fabric.IText): any {
    return {
      common: this.getRequestCommon(text)
    }
  }
  getRequestLine(line: fabric.Line): any {
    console.log(line)
    let positionPortion = this.canvas.positionPortion * 20
    return {
      color: line.stroke,
      width: line.strokeWidth / this.canvas.thickPortion,
      startPosition: {
        x: line.x1 * line.left / positionPortion,
        y: line.y1 * (this.canvas.width - line.top) / positionPortion,
      },
      endPosition: {
        x: line.x2 * line.left / positionPortion,
        y: line.y2 * (this.canvas.width - line.top) / positionPortion,
      }
    }
  }
  getRequestCircle(circle: fabric.Circle): any {
    return {
      common: this.getRequestCommon(circle)
    }
  }
  getRequestCommon(component: any): any {
    return {
      border: {
        color: component.stroke,
        thick: component.strokeWidth / this.canvas.thickPortion,
      },
      backgroundColor: component.fill,
      size: {
        width: component.width / this.canvas.sizePortion,
        height: component.height / this.canvas.sizePortion,
      },
      position: {
        x: component.left / this.canvas.positionPortion,
        y: (this.canvas.width - component.top) / this.canvas.positionPortion,
      },
      text: {
        content: component.text
      }
    }
  }
  getRequestRect(rect: fabric.Rect): any {
    return {
      common: this.getRequestCommon(rect)
    }
  }
  getLatexDoc(objects: any[]): Promise<string> {
    let body = this.getRequestBody(objects)
    return this.http.post<string>(API_URL, body).toPromise();
  }
  getRequestBody(objects: any[]): any {
    let getRequestBody = {
      rectangles: [],
      circles: [],
      lines: [],
      texts: [],
    }
    objects.forEach(item => {
      switch (true) {
        case item instanceof fabric.Rect:
          let rect = this.getRequestRect(item)
          getRequestBody.rectangles.push(rect)
          break;
        case item instanceof fabric.Circle:
          let circle = this.getRequestCircle(item)
          getRequestBody.circles.push(circle)
          break
        case item instanceof fabric.Line:
          let line = this.getRequestLine(item)
          getRequestBody.lines.push(line)
          break
        case item instanceof fabric.IText:
          let text = this.getRequestText(item)
          getRequestBody.texts.push(text)
          break
        default:
          break;
      }
    });
    return getRequestBody
  }
}
