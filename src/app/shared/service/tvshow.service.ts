import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private http:HttpClient) { }
  getTrending(){
    return this.http.get<any>(`${environment.apiUrl}/3/trending/tv/day`)
  }
  
  getAiringoday(){
    return this.http.get<any>(`${environment.apiUrl}/3/tv/airing_today`)
  }
  getPopular(){
    return this.http.get<any>(`${environment.apiUrl}/3/tv/popular`)
  }
  getTopRated(){
    return this.http.get<any>(`${environment.apiUrl}/3/tv/top_rated`)
  }
  getOnAir(){
   return this.http.get<any>(`${environment.apiUrl}/3/tv/on_the_air`)
  }
  getSeriesDetails(id:any){
    return this.http.get<any>(`${environment.apiUrl}/3/tv/${id}`)
  }
  getSeriesVideo(id:string){
    return this.http.get<any>(`${environment.apiUrl}/3/tv/${id}/videos`)
  }
  getSeriesImages(id:string){
    return this.http.get<any>(`${environment.apiUrl}/3/tv/${id}/images`)
  }
}
