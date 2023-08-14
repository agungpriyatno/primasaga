import { HttpInterceptorFn } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const service = inject(AuthService)
  const custom = req.clone({
    headers: req.headers.set('Authorization', `${service.token}`),
  });

  console.log(custom.url);

  return next(custom);
}
