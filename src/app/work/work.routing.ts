import { Routes } from '@angular/router';

import * as fromContainers from './containers';

export const WorkRoutes: Routes = [
  { path: '', component: fromContainers.MainComponent },
  { path: 'smokeout', component: fromContainers.SmokeoutComponent },
  { path: 'yogabbagabba', component: fromContainers.YoGabbaGabbaComponent },
  { path: 'fema', component: fromContainers.FEMAComponent },
  { path: 'dau', component: fromContainers.DAUComponent },
  { path: 'holidaycards', component: fromContainers.HolidayCardsComponent },
  { path: 'comic', component: fromContainers.ComicComponent }
];
