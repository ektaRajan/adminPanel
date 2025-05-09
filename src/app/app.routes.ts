import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

export const routes: Routes = [
    {path:'', redirectTo:'dashboard', pathMatch:'full'},

    {path: 'dashboard', component: DashboardComponent},
    {path: 'vehicle', component: VehicleComponent},


];
