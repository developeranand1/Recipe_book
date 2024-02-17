import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent: () => import('./components/home/home.component')},
   {path:'user-login', loadComponent:() => import('./components/user-login/user-login.component')},
   {path:'recipe-list', loadComponent: () => import('./components/recipe-list/recipe-list.component')},
   {path:'recipe-from', loadComponent:() => import('./components/recipe-form/recipe-form.component')},
   {path:'recipe-details', loadComponent:() => import('./components/recipe-detail/recipe-detail.component')},
   {path:'user-profile', loadComponent:() => import('./components/user-profile/user-profile.component')},
   {path:'contact', loadComponent:() => import('./components/contact/contact.component')},
   {path:'user-register', loadComponent:() => import('./components/user-register/user-register.component')},
//    { path: '**', component: NotFoundComponent }
];
