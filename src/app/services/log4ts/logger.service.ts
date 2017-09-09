import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  public info;
  public warn;
  public error;

  // public logFromLoggerService( msg: any ): void { }
}

// The set of built-in Log4j levels includes TRACE, DEBUG, INFO, WARN, ERROR, and FATAL.
