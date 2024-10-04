import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NgIf } from '@angular/common';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  user:any=JSON.parse(localStorage.getItem('netuser')!);
  title = 'Netflix';
  authService=inject(AuthService)
  accessComp: unknown;
  ngOnInit(): void {
    this.authService.getAccessComp().subscribe((msg)=>{
      this.accessComp=msg
      console.log(msg)
     })
    if(this.user){
      this.authService.setAccessComp(true)
    }else{
      this.authService.setAccessComp(false)
    }

  }
}
