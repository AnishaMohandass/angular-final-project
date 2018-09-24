import { Injectable } from '@angular/core';
import { College } from './college';
import { LIST } from './mock-college';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  getNames() : Observable<College[]> {
    return of(LIST);
  }

  constructor() { }
}
