import { Injectable } from '@angular/core';

export interface ILogger {

  info: any;
  warn: any;
  error: any;
}

@Injectable()
export class LoggerService implements ILogger {

  info: any;
  warn: any;
  error: any;
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
