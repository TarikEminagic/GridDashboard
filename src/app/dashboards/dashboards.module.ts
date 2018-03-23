import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ROUTES } from './dashboards.routing';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { RouterModule } from '@angular/router';
import { GridsterModule } from 'angular2Gridster/dist/gridster.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    GridsterModule
  ],
  declarations: [
    UserDashboardComponent
  ],
  providers: [DashboardService]
})
export class DashboardsModule { }
