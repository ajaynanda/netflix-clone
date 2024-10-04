import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authguardGuard: CanActivateFn = (route, state) => {
const router = inject(Router);
const netUser = localStorage.getItem('netuser');
const token = netUser ? JSON.parse(netUser) : null;
  let currentDate=Math.floor(Date.now() / 1000);

  if(token && token.exp > currentDate){
    return true
  }else{
    localStorage.removeItem('netuser')
    router.navigate([''])
    return false
  }
};

export const LoginGuard: CanActivateFn = (route, state) => {
  
 const router = inject(Router);
 const authService  =inject(AuthService)
  const netUser = localStorage.getItem('netuser');
 
  const token = netUser ? JSON.parse(netUser) : null; 
  // if(token){
  //   authService.setAccessComp(true)
  // }else{
  //   authService.setAccessComp(false)
  // }
    if(!token){
      if (state.url !== '/') {
        console.log(netUser,"user")
        router.navigate([''] );
        return false;
      }
      return true;
    }else{
      if (state.url === '/') {
        router.navigate(['/home']);
        return false;
      }
      return true
    }
  };
