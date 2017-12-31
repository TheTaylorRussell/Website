import { MainComponent } from './main/main.component';
import { SmokeoutComponent } from './smokeout/smokeout.component';
import { YoGabbaGabbaComponent } from './yogabba/yogabba.component';
import { FEMAComponent } from './fema/fema.component';
import { DAUComponent } from './dau/dau.component';
import { ComicComponent } from './comic/comic.component';
import { HolidayCardsComponent } from './holidaycards/holidaycards.component';

export const containers: any[] = [
  MainComponent,
  SmokeoutComponent,
  YoGabbaGabbaComponent,
  FEMAComponent,
  DAUComponent,
  ComicComponent,
  HolidayCardsComponent
];

export * from './main/main.component';
export * from './smokeout/smokeout.component';
export * from './yogabba/yogabba.component';
export * from './holidaycards/holidaycards.component';
export * from './fema/fema.component';
export * from './dau/dau.component';
export * from './comic/comic.component';
