import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayStocksDetailComponent } from './views/display-stocks-detail/display-stocks-detail.component';
import { DisplayStocksComponent } from './views/display-stocks/display-stocks.component';

const routes: Routes = [{
    path : '',
    component: DisplayStocksComponent
  },
  {
    path: 'detail/:id',
    component: DisplayStocksDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
