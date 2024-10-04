import { Component, OnInit, inject } from '@angular/core';
import { BannerComponent } from '../components/banner/banner.component';
import { MovieListComponent } from '../../shared/component/movie-list/movie-list.component';
import { MovieService } from '../../shared/service/movie.service';
import { movieContent } from '../../shared/model/movie';
import { CommonModule, NgIf } from '@angular/common';
import { forkJoin,map,switchMap } from 'rxjs';
import { TvshowService } from '../../shared/service/tvshow.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BannerComponent, MovieListComponent, NgIf,LoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  loaderState:boolean=false
  movieService=inject(MovieService)
  tvShowService=inject(TvshowService)
  movieList: any[]=[];
  topRated:any[]=[]
  upcoming:any[]=[]
  trending:any[]=[]
  comedy:any[]=[]
  nowplaying:any[]=[]
  movieSources=[
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated(),
    this.movieService.getUpcoming(),
    this.movieService.getTrending(),
    this.movieService.getNowPlaying()
  ]
  bannerDetails$:any
  bannerVideo$:any
  trendings:any[]=[];
popular:any[]=[];
airingToday:any[]=[];
onAir:any[]=[];
topRateds:any[]=[];
tvSeries=[
  this.tvShowService.getTrending(),
  this.tvShowService.getPopular(),
  this.tvShowService.getTopRated(),
  this.tvShowService.getAiringoday(),
  this.tvShowService.getOnAir()
]
  ngOnInit(){
    this.loaderState=true
    forkJoin(this.movieSources).pipe(
      switchMap(([movies, topRated, upcoming, trending, nowplaying]) => {
        this.movieList = movies.results as movieContent[];
        this.topRated = topRated.results as movieContent[];
        this.upcoming = upcoming.results as movieContent[];
        this.trending = trending.results as movieContent[];
        this.nowplaying = nowplaying.results as movieContent[];
        const randomIndex = Math.floor(Math.random() * movies.results.length);
        return forkJoin({
          
          bannerDetails: this.movieService.getBannerDetail(movies.results[randomIndex].id),
          bannerVideo: this.movieService.getBannerVideo(movies.results[randomIndex].id)
        });
      })
    ).subscribe(({ bannerDetails, bannerVideo }) => {
      this.bannerDetails$ = bannerDetails;
      this.bannerVideo$ = bannerVideo;
    });
    forkJoin(this.tvSeries).pipe(
      map(([trending,popular,toprated,airingtoday,onair])=>{
        this.trendings = trending.results as any[];
          this.topRateds = toprated.results as any[];
          this.popular = popular.results as any[];
          this.airingToday = airingtoday.results as any[];
          this.onAir = onair.results as any[];
         
      })
    ).subscribe((res)=>{
      this.loaderState=false
    })
  }
}
