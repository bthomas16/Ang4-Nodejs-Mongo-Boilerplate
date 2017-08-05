import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";

import { LandingHeroComponent } from '../landing-hero/landing-hero.component';
import { SignupComponent } from '../signup/signup.component';
import { MasterSignupComponent } from '../master-signup/master-signup.component';
import { MainComponent } from '../main/main.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: LandingHeroComponent },
    { path: 'landing', component: MainComponent },
    { path: 'signup/apprentice', component: SignupComponent },
    { path: 'signup/teacher', component: MasterSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AuthRoutesModule {}
