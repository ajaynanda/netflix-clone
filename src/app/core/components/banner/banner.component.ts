import { Component, OnChanges, OnInit, SimpleChanges, inject, input } from '@angular/core';
import { MovieService } from '../../../shared/service/movie.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit,OnChanges{
movieService=inject(MovieService)
bannerDetail=input.required<any>()
bannerVideo=input.required<any>()
sanitizer=inject(DomSanitizer)
videoUrl:any

ngOnInit(): void {
  let videoKey=this.bannerVideo().results.filter((x:any)=>x.type=='Trailer')
  this.videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoKey[0].key}?controls=0&autoplay=1&mute=1&loop=1&playlist=${videoKey[0].key}`);
}
ngOnChanges(changes: SimpleChanges): void {
  if(changes['bannerVideo.key']){
    let videoKey=this.bannerVideo().results.filter((x:any)=>x.type=='Trailer')
   this.videoUrl= this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoKey[0].key}?controls=0&autoplay=1&mute=1&loop=1&playlist=${videoKey[0].key}`);
  }
}
}
