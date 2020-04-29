import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminComponent } from './admin/admin.component';

import { VerifyComponent } from './verify/verify.component';
import { OptionsViewComponent } from './options-view/options-view.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { AuthService } from './services/auth.service';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { OneMoreStepComponent } from './one-more-step/one-more-step.component';
import { StoreViewComponent } from './store-view/store-view.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MedicalComponent } from './medical/medical.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { MapViewComponent } from './map-view/map-view.component';
import { SmsViewComponent } from './sms-view/sms-view.component';

export function tokenGetter() {
  return sessionStorage.getItem('token');
}

// tslint:disable-next-line: variable-name
const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AdminComponent,
    VerifyComponent,
    OptionsViewComponent,
    CreateStoreComponent,
    AllnewsComponent,
    OneMoreStepComponent,
    StoreViewComponent,
    MedicalComponent,
    GroceriesComponent,
    MapViewComponent,
    SmsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot(JWT_Module_Options),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrE_UJ643tqL3B0yEmtiug_r-1-F4LGyA'
    })
  ],
  providers: [AuthGaurdService, AuthService, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
