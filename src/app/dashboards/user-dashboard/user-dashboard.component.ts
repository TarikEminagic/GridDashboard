import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { IGridsterOptions } from 'angular2Gridster';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  private dashboardKey = 'personel-user-dashboard';
  gridsterOptions: IGridsterOptions;
  widgets: Array<any> = [
    {
        x: 0, y: 0,
        w: 1, h: 2,
        dragAndDrop: true,
        resizable: true,
        title: 'Basic form inputs 1'
    },
    {
        x: 1, y: 0, w: 3, h: 1,
        dragAndDrop: true,
        resizable: true,
        title: 'Basic form inputs 2'
    },
    {
        x: 1, y: 1, w: 2, h: 1,
        dragAndDrop: true,
        resizable: true,
        title: 'Basic form inputs 3'
    },
    {
        x: 3, y: 1, w: 1, h: 2,
        dragAndDrop: true,
        resizable: true,
        title: 'Basic form inputs 4'
    },
    {
        w: 1, h: 2,
        dragAndDrop: true,
        resizable: true,
        title: 'Basic form inputs x'
    }
  ];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    forkJoin([
      this.dashboardService.getConfiguration(this.dashboardKey),
      this.dashboardService.getDefaultConfiguration()
    ]).subscribe((responses) => {
      this.gridsterOptions = responses[0] ? responses[0] : responses[1];
      if (!responses[0]) {
        this.saveGridOptions(responses[1]);
      }
    });
  }

  saveGridOptions(options: IGridsterOptions) {
    this.dashboardService.saveConfiguration(this.dashboardKey, options);
  }

}
