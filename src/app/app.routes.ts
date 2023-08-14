import { Routes } from '@angular/router';

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
    path: "profile",
    loadComponent: () => import("./pages/profile/profile.component").then(c => c.ProfileComponent)
  },
  {
    path: "",
    loadComponent: () => import("./pages/index/index.component").then(c => c.IndexComponent)
  }
];
