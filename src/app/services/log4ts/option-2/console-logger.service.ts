import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

import { Logger } from './logger.service';

const noop = (): any => undefined;

@Injectable()
export class ConsoleLoggerService implements Logger {

  private isDevMode: boolean = isDevMode();

  constructor() {
    const _console: Console = typeof console === 'object' ? console : <any>{};
  }

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

  other(message?: any, ...optionalParams: any[]) {
    console.log.apply( console, arguments );
  }

  public logFromLoggerService( msg: any ): void {
    const logFn = console.info.bind(console);
    logFn(msg);
  }
}

/*

private _invokeConsoleMethod(type: string, args?: any[]): void {
+    let logFn: Function = (<any>this._console)[type] || this._console.log || noop;
+
+    // console methods in IE9 don't have 'apply' method, polyfill it
+    if (!logFn.apply) {
+      logFn = Function.prototype.bind.call(logFn, this._console);
+    }
+
+    logFn.apply(this._console, args);
+  }

this.worksheet[methodName](param1);

    const logFn: Function = console.log;
    logFn.apply(console, msg);


  public logFromLoggerService( msg: any ): void {
    ( console && console.info ) && console.info( msg );
  }



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

