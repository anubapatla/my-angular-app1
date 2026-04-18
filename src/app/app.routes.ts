import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'employee',component:EmployeeComponent},
    {path:'**',component:PageNotFoundComponent},
    {path:'about',component:AboutComponent},
    ];
