import { Routes } from '@angular/router';
import { noAuthGuard } from './core/guards/no-auth.guard';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: "post",
    loadComponent: () => import("./pages/post/post.component").then(c => c.PostComponent),
    canActivate: [authGuard]
  },
  {
    path: "signin",
    loadComponent: () => import("./pages/signin/signin.component").then(c => c.SigninComponent),
    canActivate: [noAuthGuard]
  },
  {
    path: "signup",
    loadComponent: () => import("./pages/signup/signup.component").then(c => c.SignupComponent),
    canActivate: [noAuthGuard]
  },
  {
    path: "profile",
    loadComponent: () => import("./pages/profile/profile.component").then(c => c.ProfileComponent),
    canActivate: [authGuard]
  },
  {
    path: "",
    loadComponent: () => import("./pages/index/index.component").then(c => c.IndexComponent),
    canActivate: [authGuard]
  }
];
