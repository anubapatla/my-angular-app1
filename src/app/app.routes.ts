import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
  {
    path: 'first',
    component:FirstComponent,
  },
  {
    path:'second',
    //component:SecondComponent,
    loadComponent:()=>import('./second/second.component').then(m=>m.SecondComponent)
  },
];