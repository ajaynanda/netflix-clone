import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../shared/service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  router=inject(Router)
  auth=inject(AuthService)
  user=input.required<any>()
  isMenuOpen:boolean=false
// menu=['Home','TV Shows','News&Popular','My List','Categories']
menu = [
  { name: 'Home', routeTo: '/home' },
  { name: 'Movies', routeTo: '/movies' },
  { name: 'TV Shows', routeTo: '/tv-shows' },
  // { name: 'News & Popular', routeTo: '/news-popular' },
  // { name: 'Categories', routeTo: '/categories' }
];  
ngOnInit(): void {
  
}
signout(){
  this.auth.setAccessComp(false)
  this.auth.signOut()
}
toggleMenu(){
  this.isMenuOpen = !this.isMenuOpen;
}
}
