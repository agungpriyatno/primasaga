import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: "post",
    loadComponent: () => import("./pages/post/post.component").then(c => c.PostComponent)
  },
  {
    path: "signin",
    loadComponent: () => import("./pages/signin/signin.component").then(c => c.SigninComponent)
  },
  {
    path: "signup",
    loadComponent: () => import("./pages/signup/signup.component").then(c => c.SignupComponent)
  },
  {
    path: "authorize",
    loadComponent: () => import("./pages/authorize/authorize.component").then(c => c.AuthorizeComponent)
  },
  
  {
    path: "profile",
    loadComponent: () => import("./pages/profile/profile.component").then(c => c.ProfileComponent),
    canActivate: [authGuard]
  },
  {
    path: "",
    loadComponent: () => import("./pages/index/index.component").then(c => c.IndexComponent)
  }
];
