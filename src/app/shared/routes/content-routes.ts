import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'sample',
    loadChildren: () => import('../../components/sample/sample.module').then(m => m.SampleModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('../../components/accounts/account.module').then(m => m.AccountModule)
  },
];