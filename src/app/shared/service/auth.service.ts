import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
declare var google:any;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
router=inject(Router)
accessComp=new Subject()
  constructor() { }
  signOut(){
    google.accounts.id.disableAutoSelect()
    localStorage.removeItem('netuser')
    this.router.navigate([''])
  }
  getAccessComp(){
    return this.accessComp
  }
  setAccessComp(data:boolean){
    this.accessComp.next(data)
  }
}
