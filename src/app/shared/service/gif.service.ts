import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Gif } from 'src/app/model/Gif';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  gifs = new BehaviorSubject<any>([]);

  trendingApiUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=';
  searchApiUrl = 'https://api.giphy.com/v1/gifs/search?q=';

  constructor(private http: HttpClient) { }

  fetchGifs(): Subscription {
    return this.http.get<Gif>(this.trendingApiUrl + environment.ApiKey + '&limit=12')
      .subscribe((response: any) => {
        this.gifs.next(response.data);
      });
  }
  fetchGifsByName(gifName: string): Subscription {
    return this.http.get(this.searchApiUrl + gifName + '&api_key=' + environment.ApiKey + '&limit=12')
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    });
  }
  getGifs(): Observable<Gif> {
    return this.gifs.asObservable();
  }
}
