import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './products/product.component';

const extraOptions: ExtraOptions = { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'};

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'products/:id', component: ProductComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, extraOptions)], 
    exports: [RouterModule]
})

export class AppRoutingModule {
    
 }

