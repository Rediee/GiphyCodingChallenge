import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ActiveToast, ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { GifService } from '../shared/service/gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @ViewChild('gif') gifInput;
  // @Select(GifState.getGifList) gifs: Observable<Gif[]>;

  constructor(private gifService: GifService,
              private toastrService: ToastrService) {
  }

  searchGifs(gifName: string): ActiveToast<any>{
    if (gifName === 'cats' || gifName === 'puppies') {
      this.gifInput.nativeElement.value = '';
      return this.toastrService.error('You used one of the forbidden words, please try again', 'Oops!!');
    }
    if (gifName !== ''){
       this.gifService.fetchGifsByName(gifName);
       this.gifInput.nativeElement.value = '';
       return this.toastrService.success('Loaded gifs succesfully', 'Great!!');
    }
  }
}
