import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";

import { LandingHeroComponent } from '../landing-hero/landing-hero.component';
import { ApprenticeSignupComponent } from '../apprentice-signup/apprentice-signup.component';
import { MasterSignupComponent } from '../master-signup/master-signup.component';
import { MainComponent } from '../main/main.component';
import {ApprenticeLoginComponent } from '../apprentice-login/apprentice-login.component';
import {ApprenticeProfileComponent } from '../apprentice-profile/apprentice-profile.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'landing', component: MainComponent },
    { path: 'signup/apprentice', component: ApprenticeSignupComponent },
    { path: 'signup/teacher', component: MasterSignupComponent },
    { path: 'login', component: ApprenticeLoginComponent},
    { path: 'student/:id', component: ApprenticeProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AuthRoutesModule {}
