import { TestBed, inject } from '@angular/core/testing';

import { fabric } from 'fabric';

import { DrawexService } from './drawex.service';
import { FakeShareModule } from 'test';

describe('DrawexService', () => {
  let fakeObjects = [new fabric.Rect(),new fabric.Rect(),new fabric.Line(),new fabric.IText('text'),new fabric.Circle()]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FakeShareModule],
      providers: [DrawexService]
    });
  });

  it('should be created', inject([DrawexService], (service: DrawexService) => {
    expect(service).toBeTruthy();
  }));

  it('getLatexDoc should return latex document as string from given objects', inject([DrawexService], (service: DrawexService) => {
    service.getLatexDoc(fakeObjects).then((doc) => {
      expect(doc).not.toBeNull();
      expect(doc.length).toBeGreaterThan(0);
    });
  }))

  it('getRequestBody should return the request body', inject([DrawexService], (service: DrawexService) => {
    let body = service.getRequestBody(fakeObjects)
    expect(body).not.toBeNull()
    expect(body.rectangles.length).toBeGreaterThan(0)
    expect(body.circles.length).toBeGreaterThan(0)
    expect(body.lines.length).toBeGreaterThan(0)
    expect(body.texts.length).toBeGreaterThan(0)
  }))

  it('getRequestRect should return the requesting rectangle from a canvas rectangle', inject([DrawexService], (service: DrawexService) => {
    let rect = service.getRequestRect(new fabric.Rect());
    expect(rect).not.toBeNull();
  }))

  it('getRequestCommon should return the requesting common from a canvas component', inject([DrawexService], (service: DrawexService) => {
    let requestCommon = service.getRequestCommon(new fabric.Rect())
    expect(requestCommon).not.toBeNull();
  }))

  it('getRequestCircle should return the requesting circle from a canvas circle', inject([DrawexService], (service: DrawexService) => {
    let circle = service.getRequestCircle(new fabric.Circle());
    expect(circle).not.toBeNull();
  }))

  it('getRequestLine should return the requesting line from a canvas line', inject([DrawexService], (service: DrawexService) => {
    let line = service.getRequestLine(new fabric.Line());
    expect(line).not.toBeNull();
  }))

  it('getRequestText should return the requesting text from a canvas text', inject([DrawexService], (service: DrawexService) => {
    let text = service.getRequestText(new fabric.IText('text'));
    expect(text).not.toBeNull();
  }))

  it('convertHexToRgb should convert hex string into rgb values', inject([DrawexService], (service: DrawexService) => {
    let rgb = service.convertHexToRgb('#000000')
    expect(rgb).not.toBeNull()
    expect(rgb.r).toEqual(0)
    expect(rgb.g).toEqual(0)
    expect(rgb.b).toEqual(0)

    rgb = service.convertHexToRgb('#FFFFFF')
    expect(rgb).not.toBeNull()
    expect(rgb.r).toEqual(255)
    expect(rgb.g).toEqual(255)
    expect(rgb.b).toEqual(255)

    rgb = service.convertHexToRgb('FFF')
    expect(rgb).toBeNull()
  }))

  it('getCanvas returns the canvas',  inject([DrawexService], (service: DrawexService) => {
    let canvas = service.getCanvas()
    expect(canvas).not.toBeNull()
  }))
});
