import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionsViewComponent } from './options-view/options-view.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { OneMoreStepComponent } from './one-more-step/one-more-step.component';
import { StoreViewComponent } from './store-view/store-view.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { AuthGaurdService as AuthGuard } from './services/auth-gaurd.service';
import { from } from 'rxjs';
import { MedicalComponent } from './medical/medical.component';
import { SmsViewComponent } from './sms-view/sms-view.component';
import { MapViewComponent } from './map-view/map-view.component';



const routes: Routes = [
  {
    path: 'login/:id',
    component: LoginComponent
  },
  {
    path: 'create-store',
    component: CreateStoreComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'one-more-step/:storeid',
    component: OneMoreStepComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sms/:storeid',
    component: SmsViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'store-view',
    component: StoreViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'options-view',
    component: OptionsViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'allnews',
    component: AllnewsComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'medical',
    component: MedicalComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'live-updates',
    component: MapViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'verify/:flow/:id',
    component: VerifyComponent
  },
  {
    path: '**',
    redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
