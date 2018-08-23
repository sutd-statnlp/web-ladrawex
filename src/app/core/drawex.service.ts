import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { fabric } from 'fabric';

@Injectable({
  providedIn: 'root'
})
export class DrawexService {
  getRequestText(text: fabric.IText): any {
    return {
      common: this.getRequestCommon(text)
    }
  }
  getRequestLine(line: fabric.Line): any {
    return {
      color: line.stroke,
      width: line.strokeWidth * line.scaleY,
      startPosition: {
        x: line.x1 * line.left * line.scaleX,
        y: line.y1 * line.top,
      },
      endPosition: {
        x: line.x2 * line.left * line.scaleX,
        y: line.y2 * line.top,
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
        thick: component.strokeWidth,
      },
      backgroundColor: component.fill,
      size: {
        width: component.width * component.scaleX,
        height: component.height * component.scaleX,
      },
      position: {
        x: component.left,
        y: component.top
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
  getLatexDoc(objects: any[]): Observable<string> {
    let getRequestBody = this.getRequestBody(objects)
    console.log(getRequestBody)
    return of(`\documentclass{article}\end{document}`)
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
