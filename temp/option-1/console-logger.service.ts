import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

import { ILogger } from './logger.service';

const noop = (): any => undefined;

@Injectable()
export class ConsoleLoggerService implements ILogger {

  private isDevMode: boolean = isDevMode();

  get info() {
    if (this.isDevMode) {
      return console.info.bind(console);
    } else {
      return noop;
    }
  }

  get warn() {
    if (this.isDevMode) {
      return console.warn.bind(console);
    } else {
      return noop;
    }
  }

  get error() {
    if (this.isDevMode) {
      return console.error.bind(console);
    } else {
      return noop;
    }
  }

  /*
  public logFromLoggerService( msg: any ): void {
    ( console && console.info ) && console.info( msg );
  }
  */
}

/*

  private isDevMode: boolean = isDevMode();

  get info() {
    if (this.isDevMode) {
      return console.info.bind(console);
    } else {
      return () => {};
    }
  }

  get warn() {
    if (this.isDevMode) {
      return console.warn.bind(console);
    } else {
      return () => {};
    }
  }

  get error() {
    if (this.isDevMode) {
      return console.error.bind(console);
    } else {
      return () => {};
    }
  }

 */

