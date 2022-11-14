import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { TechnewsComponent } from '../technews/technews.component';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }


  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d3b9c7c587c148b2b54492c274f1a0b7";


  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d3b9c7c587c148b2b54492c274f1a0b7";

  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=d3b9c7c587c148b2b54492c274f1a0b7";

  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=d3b9c7c587c148b2b54492c274f1a0b7";

  //topheading()
  topHeading():Observable<any> 
  {
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  scienceNews():Observable<any>
  {
    return this._http.get(this.scienceApiUrl);
  }

  entertainmentNews():Observable<any>
  {
    return this._http.get(this.entertainmentApiUrl);
  }
}


