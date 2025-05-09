import { Component } from '@angular/core';
import { dashboard } from './dashboardData';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dashboard = dashboard;
}
