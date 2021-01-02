import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';

// import { NgxsModule } from '@ngxs/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ApiKeyInterceptor } from './shared/apikey.interceptor';
// import { ApiKeyInterceptor } from './shared/apikey.interceptor';
// import { GifState } from "./shared/states/gif.state";
// import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
// import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

@NgModule({
  exports: [
    SearchComponent,
    SearchResultsComponent
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    // NgxsModule.forRoot({
    //   GifState
    // }),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass : 'toast-top-right'
    })
  ],
  providers:
  //  [{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: ApiKeyInterceptor,
  //   multi: true,
  // }]
  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
