import { Component, OnDestroy, OnInit } from '@angular/core';
import { GifService } from '../shared/service/gif.service';
import { Gif } from '../model/Gif';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  gifs: any[] = [];

  constructor(private gifService: GifService) { }

  ngOnInit(): void {
    this.gifService.fetchGifs();
    this.gifService.getGifs()
      .subscribe((response: any ) => {
        this.gifs = response;
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe logica geeft een error met door Subscription module
  }

}
