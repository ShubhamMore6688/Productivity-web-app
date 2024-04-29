import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { StepsComponent } from './components/steps/steps.component';
import { CalenderComponent } from './components/calender/calender.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { MainComponent } from './components/main/main.component';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { EmojiPickerComponent } from './components/dashboard/emoji-picker/emoji-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    StepsComponent,
    CalenderComponent,
    TestimonialsComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AvatarComponent,
    MainComponent,
    EmojiPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
