import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { content } from "./shared/routes/content-routes";
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './components/accounts/create/create.component';

import { AuthGuard } from './_helpers';

const routes: Routes = [
  {
    path: 'sample',
    redirectTo: '/sample/sample-component',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'accounts',
    redirectTo: '/accounts/create',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'accounts',
    redirectTo: '/accounts/get',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'accounts',
    redirectTo: '/accounts/mdal',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
    canActivate: [AuthGuard]
  },
 {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
},
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
