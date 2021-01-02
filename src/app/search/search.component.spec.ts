import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Input } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { GifService } from '../shared/service/gif.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [ToastrService, GifService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h2 title', () => {
    const h2Title = fixture.debugElement.query(By.css('h2'));
    expect(h2Title.nativeElement.textContent.trim()).toBe('Gif Searchbar');
  });

  it('should have an input field', () => {
    const inputField = fixture.debugElement.query(By.css('input'));
    expect(inputField.nativeElement.textContent.trim()).toBe('');
  });
});

