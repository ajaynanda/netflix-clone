import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environment/environment';
export const movieInterceptor: HttpInterceptorFn = (req, next) => {
  let auth=req.clone({
    setHeaders:{
    Authorization:`Bearer ${environment.tmdb_token}`,
    },
    url:req.url
  })
  return next(auth);
};
