import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Invest } from '../models/invest';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvestService {

    invests : any
    source: any

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    // Handle API errors
    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };

  
  constructor(private http: HttpClient) {
    this.getInvestforUser().subscribe(response => {
      this.invests=response;
    })

  }

  getInvestforUser(): Observable<any> {
    return this.http
      .get<any>("http://192.168.1.9:8080/investsUser/ben")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getInvestforSourceUser(source:string): Observable<any> {
    return this.http
      .get<any>("http://192.168.1.9:8080/actifInvests/ben/"+source)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createSource(sourceForme: any): Observable<any> {
    return this.http.post<any>("http://192.168.1.9:8080/registerSource", JSON.stringify(sourceForme), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  
}
