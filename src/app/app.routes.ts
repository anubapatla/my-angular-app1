import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'work', component: WorkComponent},
    {path:'news', component: NewsComponent},
    {path:'services', component: ServicesComponent}
];
