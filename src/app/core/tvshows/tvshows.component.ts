import { Component, inject, OnInit } from '@angular/core';
import { BannerComponent } from '../components/banner/banner.component';
import { TvshowService } from '../../shared/service/tvshow.service';
import { forkJoin, map, switchMap } from 'rxjs';
import { MovieListComponent } from '../../shared/component/movie-list/movie-list.component';
import { NgIf } from '@angular/common';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-tvshows',
  standalone: true,
  imports: [NgIf,BannerComponent,MovieListComponent,LoaderComponent],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.scss'
})
export class TvshowsComponent implements OnInit{
  loaderState:boolean=false
tvShowService=inject(TvshowService)
trending: any[]=[];
popular:any[]=[];
airingToday:any[]=[];
onAir:any[]=[];
topRated:any[]=[];
tvSeries=[
  this.tvShowService.getTrending(),
  this.tvShowService.getPopular(),
  this.tvShowService.getTopRated(),
  this.tvShowService.getAiringoday(),
  this.tvShowService.getOnAir()
]
bannerDetails$:any
bannerVideo$:any
  ngOnInit(): void {
    this.loaderState=true
    forkJoin(this.tvSeries).pipe(
      switchMap(([trending,popular,toprated,airingtoday,onair])=>{
        this.trending = trending.results as any[];
          this.topRated = toprated.results as any[];
          this.popular = popular.results as any[];
          this.airingToday = airingtoday.results as any[];
          this.onAir = onair.results as any[];
          console.log(this.trending,"ren");
          
        return forkJoin({       
          bannerDetails: this.tvShowService.getSeriesDetails(trending.results[2].id),
          bannerVideo: this.tvShowService.getSeriesVideo(trending.results[2].id)
        });
      })
    ).subscribe(({ bannerDetails, bannerVideo })=>{
      this.bannerDetails$ = bannerDetails;
      console.log(this.bannerDetails$,"detaisls")
      this.bannerVideo$ = bannerVideo;
      this.loaderState=false
    })

  }
}
