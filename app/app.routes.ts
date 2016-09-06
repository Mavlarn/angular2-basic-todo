import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutRoutes } from './about/about.routes';
import { ExampleRoutes } from './example/example.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/example',
        pathMatch: 'full'
    },
  ...AboutRoutes,
  ...ExampleRoutes
];
