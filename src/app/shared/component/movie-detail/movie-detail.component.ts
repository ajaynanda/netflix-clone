import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../service/movie.service';
import { CommonModule } from '@angular/common';
import { ImagePipe } from '../../pipe/image.pipe';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { FooterComponent } from '../../../core/components/footer/footer.component';
import { DomSanitizer } from '@angular/platform-browser';
import { YearPipe } from '../../pipe/year.pipe';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { RuntimePipe } from '../../pipe/runtime.pipe';
import { TvshowService } from '../../service/tvshow.service';
import { LoaderComponent } from '../../loader/loader.component';
@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    CommonModule,
    ImagePipe,
    HeaderComponent,
    FooterComponent,
    YearPipe,RuntimePipe,LoaderComponent
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent implements OnInit,AfterViewInit{
  loaderState:boolean=false
  route = inject(ActivatedRoute);
  movieService = inject(MovieService);
  tvShowService = inject(TvshowService);
  @ViewChild('swiperContainer') swiperContainer!:ElementRef
  videoUrl: any[]=[];
  sanitizer = inject(DomSanitizer);
  movieData: any;
  movieImages: any;
  isTvShow: boolean=false;
  
  ngOnInit(): void {
    this.loaderState=true
    let id = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe(queryParams => {
      this.isTvShow = queryParams['isTvShow'] === 'true';
    });
    if(!this.isTvShow){
    
      this.getBannerDetails(id);
    }else{
     this.getSeriesDetails(id)

    }
  }
  ngAfterViewInit(): void {
    this.initSwiper()
  }
  initSwiper(){
    return  new Swiper(this.swiperContainer.nativeElement,{
      effect: 'fade',
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
  getSeriesDetails(id:any){
    this.tvShowService.getSeriesDetails(id).subscribe((res)=>{
      console.log(res,"res serie datilas");
      this.movieData=res
      this.getSeriesVideo(this.movieData.id)
      this.getSeriesImages(this.movieData.id)
     
    })
  }
  getSeriesVideo(id:any){
    this.tvShowService.getSeriesVideo(id).subscribe((res)=>{
      let videoKeys = res.results.filter((x: any) => x.type == 'Trailer');
      for(let videoKey of videoKeys){
        this.videoUrl.push(this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${videoKey?.key}?controls=0&autoplay=1&mute=1&loop=1&playlist=${videoKey?.key}`
        ));
      }
      this.loaderState=false
    });
  }
  getSeriesImages(id: string) {
    this.tvShowService.getSeriesImages(id).subscribe((res) => {
      console.log(res, 'mages');
      this.movieImages=res
    });
  }
  getBannerDetails(id: any) {
    this.movieService.getBannerDetail(id).subscribe((res) => {
      this.movieData = res;
      this.getBannerVideo(this.movieData.id);
      this.getMovieImages(this.movieData.id);
    });
  }
  getBannerVideo(id: string) {
    this.movieService.getBannerVideo(id).subscribe((res) => {
      let videoKeys = res.results.filter((x: any) => x.type == 'Trailer');
      for(let videoKey of videoKeys){
        this.videoUrl.push(this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${videoKey?.key}?controls=0&autoplay=1&mute=1&loop=1&playlist=${videoKey?.key}`
        ));
      }
    });
    this.loaderState=false
  }
  getMovieImages(id: string) {
    this.movieService.getMovieImages(id).subscribe((res) => {
      this.movieImages=res
    });
  }
}
