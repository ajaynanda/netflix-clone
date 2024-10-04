import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../shared/service/movie.service';
import { forkJoin, switchMap } from 'rxjs';
import { movieContent } from '../../shared/model/movie';
import { CommonModule, NgIf } from '@angular/common';
import { BannerComponent } from '../components/banner/banner.component';
import { MovieListComponent } from '../../shared/component/movie-list/movie-list.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, BannerComponent, MovieListComponent, NgIf,LoaderComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit{
  loaderState:boolean=false
  movieService=inject(MovieService)
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
  ngOnInit(): void {
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
      this.loaderState=false
    });
  }
}
