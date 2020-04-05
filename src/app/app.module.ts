import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { StoreOwnerComponent } from './store-owner/store-owner.component';
import { AdminComponent } from './admin/admin.component';
import { VolunteerViewComponent } from './volunteer-view/volunteer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    StoreLocatorComponent,
    VolunteerComponent,
    StoreOwnerComponent,
    AdminComponent,
    VolunteerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
