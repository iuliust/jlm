import 'angular2-universal-polyfills';
import './polyfills.ts';
import 'hammerjs';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformUniversalDynamic } from 'angular2-universal/browser';
import { enableProdMode, CompilerOptions, ViewEncapsulation } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.browser.module';

if (environment.production) {
  enableProdMode();
}

// let options: CompilerOptions = {
//   defaultEncapsulation: ViewEncapsulation.Emulated
// };

const platformRef = platformUniversalDynamic();
document.addEventListener('DOMContentLoaded', () => {
  platformRef.bootstrapModule(AppModule);
});
// platformBrowserDynamic().bootstrapModule(AppModule);
