import { Routes } from '@angular/router';

import * as fromContainers from './containers';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: fromContainers.MainComponent
  }
];
