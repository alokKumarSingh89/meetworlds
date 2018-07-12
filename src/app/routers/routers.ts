import { Routes } from '@angular/router';
import {LoginComponent} from '../users/login/login.component';
import {DashboardComponent} from '../dashboard/dashboard.component'
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component:DashboardComponent },
]