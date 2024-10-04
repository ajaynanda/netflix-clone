import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { DescriptionPipe } from '../../pipe/description.pipe';
import { ImagePipe } from '../../pipe/image.pipe';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgFor,DescriptionPipe,ImagePipe,NgIf],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  animations:[
    trigger('fade',[
      transition('void=>*',[
        style({opacity:0}),
        animate(300,style({opacity:1}))
      ])
    ])
  ]
})
export class MovieListComponent implements OnInit,AfterViewInit{
@ViewChild('swiperContainer') swiperContainer!:ElementRef
movies=input<any>()
title=input<any>();
selectedContent:any=null;
router=inject(Router)
ngOnInit(): void {
}
ngAfterViewInit(): void {
  this.initSwiper()
}
initSwiper(){
  return  new Swiper(this.swiperContainer.nativeElement,{
    effect: 'flip',
  flipEffect: {
    slideShadows: true,
  },
    modules: [Navigation, Pagination],
    slidesPerView:3,
    slidesPerGroup:2,
    centeredSlides:true,
    loop:true,
    breakpoints:{
      600:{
        slidesPerView:2,
        slidesPerGroup:2,
        spaceBetween:5,
        centeredSlides:false,
      },
      900:{
        slidesPerView:3,
        slidesPerGroup:3,
        spaceBetween:5,
        centeredSlides:false,
      },
      1200:{
        slidesPerView:4,
        slidesPerGroup:4,
        spaceBetween:5,
        centeredSlides:false,
      },
      1500:{
        slidesPerView:3,
        slidesPerGroup:5,
        spaceBetween:5,
        centeredSlides:false,
      },
      1800:{
        slidesPerView:5,
        slidesPerGroup:5,
        spaceBetween:5,
        centeredSlides:true,
      }
    }
  })
}
setHoverMovie(movie:any){
  this.selectedContent = movie.original_title ?? movie.title ?? movie.original_name;
}
clearHoverMovie(){
this.selectedContent=null
}
detailPage(movie:any){
  const isTvShow = movie.original_name ? true : false;
  this.router.navigate(['/detail', movie.id], { queryParams: { isTvShow } });
}
}
