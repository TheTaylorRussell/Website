import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery';
import { SharedModule } from '../shared/shared.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

import { WorkRoutes } from './work.routing';

@NgModule({
  imports: [RouterModule.forChild(WorkRoutes), SharedModule, NgxGalleryModule],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
  providers: []
})
export class WorkModule {}
