import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingHeroComponent } from './landing-hero/landing-hero.component';
import { FutureSkillsComponent } from './future-skills/future-skills.component';
import { TeachersPreviewComponent } from './teachers-preview/teachers-preview.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SignupComponent } from './signup/signup.component';
import { MasterSignupComponent } from './master-signup/master-signup.component';

import {AuthRoutesModule } from './auth/auth-routes.module';
import { AuthService} from './auth/auth.service';
import { MainComponent } from './main/main.component';
import { MasterSignupFormComponent } from './master-signup/master-signup-form/master-signup-form.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { ApprenticeLoginComponent } from './apprentice-login/apprentice-login.component';
import { ApprenticeProfileComponent } from './apprentice-profile/apprentice-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingHeroComponent,
    FutureSkillsComponent,
    TeachersPreviewComponent,
    TestimonialsComponent,
    SignupComponent,
    MasterSignupComponent,
    MainComponent,
    MasterSignupFormComponent,
    SignupFormComponent,
    ApprenticeLoginComponent,
    ApprenticeProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutesModule,
    HttpModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
