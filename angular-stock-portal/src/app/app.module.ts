import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayStocksComponent } from './views/display-stocks/display-stocks.component';
import { DisplayStocksDetailComponent } from './views/display-stocks-detail/display-stocks-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayStocksComponent,
    DisplayStocksDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
