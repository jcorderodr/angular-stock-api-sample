import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { take, map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StockModel } from '../models/stock-model';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
   }

   getStocks(name: string) : Observable<StockModel[]> {
    const url = environment.apiUrl + `?function=SYMBOL_SEARCH&keywords=${name}&apikey=${environment.apiKey}`;

    return  this.httpClient.get<StockModel[]>(url)
      .pipe(
        take(15), // amount of results to deal with, move to settings
        map(response => {

          const bestMatchesKey = "bestMatches";
          const keyTyped = bestMatchesKey as keyof typeof response;
          const matches = response[keyTyped] as any;

          const result = matches && matches.map((p:any) =>  {
            return new StockModel(p["1. symbol"], p["2. name"], p["3. type"], 0)
          });

          return result;
        }),
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
      );
   }  
   
   getStockById(id: string) : Observable<StockModel> {
    const url = environment.apiUrl + `?function=TIME_SERIES_DAILY&symbol=${id}&apikey=${environment.apiKey}`;

    return  this.httpClient.get<StockModel>(url)
      .pipe(
        map(response => {

          const metaDataKey = "Meta Data";
          const dataSeriesKey = "Time Series (Daily)";

          const dataSeriesKeyTyped = dataSeriesKey as keyof typeof response;
          const dataSeries = response[dataSeriesKeyTyped] as any;

          let array = Object.entries(dataSeries);

          const single = array[0][1] as any;


          var model = new StockModel(id,'','', single["4. close"]);
          model.diff = single["1. open"] - single["3. low"];
          model.volume = single["5. volume"];

          return model;
        })
      );
   }


}
