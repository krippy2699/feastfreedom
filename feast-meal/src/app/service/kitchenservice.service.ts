import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IKitchen } from 'src/Model/KitchenModel';


@Injectable({
  providedIn: 'root'
})
export class KitchenserviceService {

  private kitchenapi : string = "http://localhost:3200/kitchen/";

  constructor(private http : HttpClient) { }

  public getKitchen() : Observable <IKitchen[]>
  {
    return this.http.get<IKitchen[]>(this.kitchenapi)
    .pipe(catchError(this.errorhandler));
  }

  public getKitchenById(id : number) : Observable <IKitchen[]>
  {
    return this.http.get<IKitchen[]>(this.kitchenapi + '/' + id).pipe(catchError(this.errorhandler));
  }


  public errorhandler(error:HttpErrorResponse)
  {
    return throwError(error.message || "Server Error !");
  }

}






/*


export class EserviceService {

  private apiurl : string = "http://localhost:4000/emplist/"

  constructor(private http : HttpClient) { }

  public getEmployees() : Observable <IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.apiurl)
    .pipe(catchError(this.errorhandler));
  }

  public getById(id : number): Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.apiurl + '/' + id).pipe(catchError(this.errorhandler));
  } 

  public errorhandler(error:HttpErrorResponse)
  {
    return throwError(error.message || "Server Error !");
  }

}



*/