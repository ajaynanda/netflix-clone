import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  getPopularMovies(){
   return  this.http.get<any>(`${environment.apiUrl}/3/movie/popular`)
  }
getTopRated(){
  return this.http.get<any>(`${environment.apiUrl}/3/movie/top_rated`)
}
getUpcoming(){
  return this.http.get<any>(`${environment.apiUrl}/3/movie/upcoming`)
}
getTrending(){
  return this.http.get<any>(`${environment.apiUrl}/3/trending/movie/week`)
}
getNowPlaying(){
  return this.http.get<any>(`${environment.apiUrl}/3/movie/now_playing`)
}
getBannerDetail(id:any){
  return this.http.get<any>(`${environment.apiUrl}/3/movie/${id}`)
}
getBannerVideo(id:string){
  return this.http.get<any>(`${environment.apiUrl}/3/movie/${id}/videos`)
}
getMovieImages(id:string){
return this.http.get<any>(`${environment.apiUrl}/3/movie/${id}/images`)
}
}
