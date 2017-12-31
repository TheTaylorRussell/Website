import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes), SharedModule],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
  providers: []
})
export class HomeModule {}
