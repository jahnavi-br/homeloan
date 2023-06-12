import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplicationComponent } from './application/application.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Application1Component } from './application1/application1.component';
import { Application2Component } from './application2/application2.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    AboutUsComponent,
    ApplicationComponent,
    LoginComponent,
    FaqComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserDashboardComponent,
    Application1Component,
    Application2Component,
    UploadDocumentsComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
