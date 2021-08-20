import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http' 
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrosInterceptor } from './interceptors/http-error.interceptor';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrosInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
