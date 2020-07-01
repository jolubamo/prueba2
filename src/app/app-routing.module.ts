import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { PersonaComponent } from './page/persona/persona.component';
import { NotFoundComponent } from './page/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'persona',
    component: PersonaComponent
  },
  {
    path:'404-not-found',
    component: NotFoundComponent
  },
  { 
    path: '**', redirectTo: '404-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
