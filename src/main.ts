import './polyfills.ts';
import 'hammerjs';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, CompilerOptions, ViewEncapsulation } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

let options: CompilerOptions = {
  defaultEncapsulation: ViewEncapsulation.Emulated
};

platformBrowserDynamic().bootstrapModule(AppModule, options);
