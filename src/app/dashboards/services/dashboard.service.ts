import { Injectable, transition } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IGridsterOptions } from 'angular2Gridster';

const DEFAULT_OPTIONS: IGridsterOptions = {
  lanes: 1,
  direction: 'vertical',
  floating: true,
  dragAndDrop: true,
  resizable: true,
  resizeHandles: {
    s: true,
    e: true,
    se: true
  },
  widthHeightRatio: 1,
  lines: {
    visible: true,
    color: '#efefef',
    width: 2
  },
  shrink: true,
  useCSSTransforms: true,
  responsiveView: true,
  responsiveDebounce: 500,
  responsiveOptions: [
    {
      breakpoint: 'sm',
      minWidth: 480,
      lanes: 2
    },
    {
      breakpoint: 'md',
      minWidth: 768,
      lanes: 6,
    },
    {
      breakpoint: 'lg',
      lanes: 12
    },
    {
      breakpoint: 'xl',
      lanes: 12
    }
  ]
};

@Injectable()
export class DashboardService {
  constructor() { }

  getDefaultConfiguration(): Observable<IGridsterOptions> {
    return Observable.of(DEFAULT_OPTIONS);
  }

  saveConfiguration(key: string, config: IGridsterOptions): void {
    localStorage.setItem(key, JSON.stringify(config));
  }

  getConfiguration(key: string): Observable<IGridsterOptions> {
    const configString = localStorage.getItem(key);
    if (configString) {
      const config = JSON.parse(configString);
      return Observable.of(config);
    } else {
      return Observable.of(null);
    }
  }

}
