import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminComponent } from './admin/admin.component';

import { VerifyComponent } from './verify/verify.component';
import { OptionsViewComponent } from './options-view/options-view.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { AllnewsComponent } from './allnews/allnews.component';

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
    AllnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
