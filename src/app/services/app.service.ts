import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getMenu() {
    return from(this.http.get(`${environment.endpoint}/menu`)).pipe(
      switchMap((data) => data ? this.http.get(`${environment.endpoint}/menu`) : EMPTY)
    )
  }

  getFooter() {
    return from(this.http.get(`${environment.endpoint}/footer`)).pipe(
      switchMap((data) => data ? this.http.get(`${environment.endpoint}/footer`) : EMPTY)
    )
  }

  getUser() {
    return from(this.http.get(`${environment.endpoint}/user`)).pipe(
      switchMap((data) => data ? this.http.get(`${environment.endpoint}/user`) : EMPTY)
    )
  }
}
