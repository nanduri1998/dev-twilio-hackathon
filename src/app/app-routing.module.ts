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
    component: CreateStoreComponent
  },
  {
    path: 'one-more-step/:storeid',
    component: OneMoreStepComponent
  },
  {
    path: 'sms/:storeid',
    component: SmsViewComponent
  },
  {
    path: 'store-view',
    component: StoreViewComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'options-view',
    component: OptionsViewComponent
  },
  {
    path : 'allnews',
    component: AllnewsComponent
  },
  {
    path : 'medical',
    component: MedicalComponent
  },
  {
    path : 'live-updates',
    component: MapViewComponent
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
