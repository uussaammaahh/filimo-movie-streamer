import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(
    private http: HttpClient
  ) { }

  getShowData(id: number) {
    return from(this.http.get(`${environment.endpoint}/content_detail/${id}`)).pipe(
      switchMap((data) => data ? this.http.get(`${environment.endpoint}/content_detail/${id}`) : EMPTY)
    )
  }
}
