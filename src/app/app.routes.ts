import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ZenboComponent } from './zenbo/zenbo.component';
import { ResilienzComponent } from './resilienz/resilienz.component'; 
import { ContactComponent } from './contact/contact.component';
import { PriceterminComponent } from './pricetermin/pricetermin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'ueber-mich', component: AboutmeComponent },
    { path: 'zenbo-balance', component: ZenboComponent },
    { path: 'resilienz-training', component: ResilienzComponent },
    { path: 'kontakt', component: ContactComponent },
    { path: 'prices', component: PriceterminComponent },

    { path: '**', redirectTo: '' }
];
