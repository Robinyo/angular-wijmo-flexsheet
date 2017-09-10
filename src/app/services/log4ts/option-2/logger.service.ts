import { Injectable } from '@angular/core';

export abstract class Logger {

  info: any;
  warn: any;
  error: any;

  abstract logFromLoggerService( msg: any ): void;
}

const noop = (): any => undefined;

export class NoOpLogger implements Logger {

  get info() {
    return noop;
  }

  get warn() {
    return noop;
  }

  get error() {
    return noop;
  }

  public logFromLoggerService( msg: any ): void {}
}

@Injectable()
export class LoggerService implements Logger {

  info: any;
  warn: any;
  error: any;

  public logFromLoggerService( msg: any ): void {}
}

// The set of built-in Log4j levels includes TRACE, DEBUG, INFO, WARN, ERROR, and FATAL.

/*

@Injectable()
export class LoggerService {

  public info: any;
  public warn: any;
  public error: any;

  // public logFromLoggerService( msg: any ): void {}
}

 */
