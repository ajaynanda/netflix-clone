import { Routes } from '@angular/router';
import { authguardGuard, LoginGuard } from './shared/guard/authguard.guard';

export const routes: Routes = [
{
    path:'',
    loadComponent:()=>import('./pages/login/login.component').then(x=>x.LoginComponent),
    canActivate:[LoginGuard]
},
{
    path:'home',
    loadComponent:()=>import('./core/home/home.component').then(x=>x.HomeComponent),
    canActivate:[authguardGuard]
},
{
    path:'movies',
    loadComponent:()=>import('./core/movies/movies.component').then(x=>x.MoviesComponent),
    canActivate:[authguardGuard]
},
{
    path:'tv-shows',
    loadComponent:()=>import('./core/tvshows/tvshows.component').then(x=>x.TvshowsComponent),
    canActivate:[authguardGuard]
},
{
    path:'detail/:id',
    loadComponent:()=>import('./shared/component/movie-detail/movie-detail.component').then(x=>x.MovieDetailComponent),
    canActivate:[authguardGuard]
}
];
