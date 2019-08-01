import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { KucaModel } from './models/kuca-model.model';
import { catchError, tap } from 'rxjs/operators';
import { StanModel } from './models/stan-model.model';
import { ZemljisteModel } from './models/zemljiste-model.model';



let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  //url-ovi za pristup api-u
  private kuceUrl = '/api/v1/kuce';
  private stanoviUrl = '/api/v1/stanovi';
  private zemljistaUrl = '/api/v1/zemljista';
  

  constructor(private http: HttpClient) {

  }

  //metoda za dohvat kuća
  getKuce(): Observable<KucaModel[]> {
    return this.http.get<KucaModel[]>(this.kuceUrl, httpOptions)
      .pipe(
        tap(_ => console.log('Fetched kuce data')),
        catchError(this.handleError('getKuce', []))
      );
  }

  //metoda za dohvat stanova
  getStanovi(): Observable<StanModel[]> {
    return this.http.get<StanModel[]>(this.stanoviUrl, httpOptions)
      .pipe(
        tap(_ => console.log('Fetched stanovi data')),
        catchError(this.handleError('getStanovi', []))
      );
  }

  //metoda za dohvat zemljišta
  getZemljista(): Observable<ZemljisteModel[]> {
    return this.http.get<ZemljisteModel[]>(this.zemljistaUrl, httpOptions)
      .pipe(
        tap(_ => console.log('Fetched zemljista data')),
        catchError(this.handleError('getZemljista', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
