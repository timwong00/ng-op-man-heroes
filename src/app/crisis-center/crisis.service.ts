import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Crisis } from "./crisis";
import { MessageService } from "../message.service";

@Injectable({
  providedIn: "root"
})
export class CrisisService {
  private crisisUrl = "api/crises";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getCrises(): Observable<Crisis[]> {
    console.log(this.http.get<Crisis[]>(this.crisisUrl));
    return this.http.get<Crisis[]>(this.crisisUrl).pipe(
      tap(_ => this.log("fetched crises")),
      catchError(this.handleError<Crisis[]>("getCrises", []))
    );
  }

  getCrisis(id: number): Observable<Crisis> {
    const url = `${this.crisisUrl}/${id}`;
    return this.http.get<Crisis>(url).pipe(
      tap(_ => this.log(`fetched crisis id=${id}`)),
      catchError(this.handleError<Crisis>(`getCrisis id=${id}`))
    );
  }

  updateCrisis(crisis: Crisis): Observable<any> {
    return this.http.put(this.crisisUrl, crisis, this.httpOptions).pipe(
      tap(_ => this.log(`updated crisis id=${crisis.id}`)),
      catchError(this.handleError<any>("updateCrisis"))
    );
  }

  private log(message: string) {
    this.messageService.add(`CrisisService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
