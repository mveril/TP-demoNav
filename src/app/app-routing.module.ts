import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:"profile", component:ProfileComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
