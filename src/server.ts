import 'angular2-universal-polyfills';

import * as path from 'path';
import * as express from 'express';
import { createEngine } from 'angular2-express-engine';
import { AppModule } from './app/app.node.module';
const app = express();
// Express View
app.engine('.html', createEngine({}));
//...
// bootstrap universal app
function ngApp(req: any, res: any) {
  res.render('index', {
    req,
    res,
    ngModule: AppModule,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: req.hostname
  });
}
// use universal for specific routes
app.get('/', ngApp);
app.get('/programme', ngApp);
// app.get('/about/*', ngApp);