import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoggerService } from './services/log4ts/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private logger: LoggerService) {
    logger.info('AppComponent: logger.info');
    logger.warn('AppComponent: logger.warn');
    logger.error('AppComponent: logger.error');
  };
}
