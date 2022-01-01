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
    users: any

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
    this.invests = [];
    this.getAllUser();
   
  }

  getList(): Observable<User> {
    return this.http
      .get<User>("http://localhost:8080/allUser")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getAllUser() {
    //Get saved list of students
   
  }

  
}
