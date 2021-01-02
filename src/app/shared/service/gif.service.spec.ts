import { TestBed } from '@angular/core/testing';
import { SearchResultsComponent } from 'src/app/search-results/search-results.component';
import { SearchComponent } from 'src/app/search/search.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Gif } from '../../model/Gif';
import { GifService } from './gif.service';

describe('GifService', () => {
  let service: GifService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, SearchResultsComponent],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GifService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should retrieve gifs from the API via GET', () => {
  //   const dummyGifs: Gif[] = [
  //     {
  //     id: 'kNrHjpcqMfb3SYlf1n',
  //     url: 'https://giphy.com/gifs/party-stefanieshank-stefanieshankparty-kNrHjpcqMfb3SYlf1n',
  //     username: 'IssyVanDeBuurt',
  //     title: 'Hoe word je een pro tester'
  //     }];

  //   service.getGifs().subscribe(gifs => {
  //     expect(gifs.length).toBe(2);
  //     expect(gifs).toEqual(dummyGifs);
  //   })
  // })
});
