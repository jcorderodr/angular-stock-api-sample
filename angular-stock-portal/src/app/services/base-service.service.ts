import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {


    public handleError(err: any) {
      console.error(`Error of code: ${err.status} has occurred: ${err.message}`);   
      return throwError(err);  
    }


}
