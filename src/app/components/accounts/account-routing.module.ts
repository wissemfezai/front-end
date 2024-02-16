import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from '../accounts/create/create.component';
import { GetComponent } from './get/get.component';
import { MdalComponent } from './mdal/mdal.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateComponent,
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'get',
        component: GetComponent,
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'mdal',
        component: MdalComponent,
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
