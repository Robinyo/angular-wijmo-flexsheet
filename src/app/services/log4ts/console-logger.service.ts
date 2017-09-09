import { isDevMode } from '@angular/core';

export class ConsoleLoggerService {

  get info() {
    if (isDevMode()) {
      return console.info.bind(console);
    } else {
      return () => {};
    }
  }

  get warn() {
    if (isDevMode()) {
      return console.warn.bind(console);
    } else {
      return () => {};
    }
  }

  get error() {
    if (isDevMode()) {
      return console.error.bind(console);
    } else {
      return () => {};
    }
  }

  /*
  public logFromLoggerService( msg: any ): void {
    ( console && console.info ) && console.info( msg );
  }
  */
}



