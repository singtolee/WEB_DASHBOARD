import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.service';

export const router:Routes=[
  { path:'',redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
