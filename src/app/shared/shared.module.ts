import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [...fromComponents.components],
  declarations: [...fromComponents.components],
  providers: []
})
export class SharedModule {}
