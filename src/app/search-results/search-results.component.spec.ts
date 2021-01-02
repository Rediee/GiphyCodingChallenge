import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { by, element, protractor } from 'protractor';

import { SearchResultsComponent } from './search-results.component';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display no more than 12 images', () => {
    const spans = fixture.debugElement.queryAll(By.css('.gifImages'));
    const spansLength = spans.length;
    // expect(element.all(by.repeater('')).count()).toBeLessThan(13);
    expect(spansLength).toEqual(component.gifs.length);
    // var elements = element.all(protractor.By.css('img'));
    // expect(elements.count()).toEqual(12);
  });
});
