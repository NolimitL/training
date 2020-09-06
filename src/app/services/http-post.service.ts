import { delay, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GettedPost } from '../interfaces/posts.interface';

@Injectable({providedIn:'root'})
export class HTTPPostService{

  postlist:GettedPost[] = []
  amountPosts:number

  constructor(private http: HttpClient){}

  setHowMuch(amount:number = 20){
    this.amountPosts = amount
  }

  getList(): Observable<any> | GettedPost{
    return this.http.get('https://jsonplaceholder.typicode.com/todos',{
      params:{
        '_limit':this.amountPosts+''
      }
    }).pipe(
      tap(val => console.log("Data from SERVICE:", val))
    )
  }

}
