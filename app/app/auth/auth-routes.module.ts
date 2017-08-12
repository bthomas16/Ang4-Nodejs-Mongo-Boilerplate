import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";

import { LandingHeroComponent } from '../landing-hero/landing-hero.component';
import { ApprenticeSignupComponent } from '../apprentice-signup/apprentice-signup.component';
import { MasterSignupComponent } from '../master-signup/master-signup.component';
import { MainComponent } from '../main/main.component';
import {ApprenticeLoginComponent } from '../apprentice-login/apprentice-login.component';
import {ApprenticeProfileComponent } from '../apprentice-profile/apprentice-profile.component';
import { MasterLoginComponent } from '../master-login/master-login.component';
import { MasterProfileComponent } from '../master-profile/master-profile.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'landing', component: MainComponent },
    { path: 'signup/apprentice', component: ApprenticeSignupComponent },
    { path: 'signup/teacher', component: MasterSignupComponent },
    { path: 'login', component: ApprenticeLoginComponent},
    { path: 'student/:id', component: ApprenticeProfileComponent},
    { path: 'teacher/login', component: MasterLoginComponent},
    { path: 'teacher/:id', component: MasterProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AuthRoutesModule {}
