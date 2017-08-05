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
    MainComponent
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
