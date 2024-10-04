import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';
declare var google:any;
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  router = inject(Router)
  authService=inject(AuthService)
  ngOnInit(){
    google.accounts.id.initialize({
      client_id:'819737108613-odotl5n71h6cgb90i9a4hgrd9a6it8j8.apps.googleusercontent.com',
      callback:(res:any)=>this.loginUser(res)})
    google.accounts.id.renderButton(document.getElementById('google-btn'),{
      theme:'filled_blue',
      size:'large',
      shape:'rectangle',
      width:300
    })
   
  }
  loginUser(res:any){
    const payLoad=JSON.parse(atob(res.credential.split('.')[1]))
    localStorage.setItem('netuser',JSON.stringify(payLoad))
    this.authService.setAccessComp(true)
    this.router.navigate(['/home'])
  }
}
