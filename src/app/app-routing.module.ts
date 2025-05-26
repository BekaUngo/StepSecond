import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/guard/auth.guard';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'users',
    component: UsersComponent,
    children: [
      {
        path:':id/:name',
        component: UserComponent
      }
    ]
  },
  {
    path:'about-us',
    component: AboutUsComponent
  },
  {
    path:'contact',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'template-form',
    component: TemplateFormComponent
  },
  {
    path:'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
