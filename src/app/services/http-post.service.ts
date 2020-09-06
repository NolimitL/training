import { delay, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GettedPost } from '../interfaces/posts.interface';

@Injectable({providedIn:'root'})
export class HTTPPostService{

  postlist:GettedPost[] = []

  constructor(private http: HttpClient){}

  getList(): Observable<any> | GettedPost{
    return this.http.get('https://jsonplaceholder.typicode.com/todos',{
      params:{
        '_limit':'10'
      }
    }).pipe(
      tap(val => console.log("Data from SERVICE:", val))
    )
  }

}
