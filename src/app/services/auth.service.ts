import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService{

  authenticated = false

  constructor(){}

  login(){
    this.authenticated = true
    console.log('Auth:',this.authenticated)
  }
  logout(){
    this.authenticated = false
  }
  isAuthenticated(): Promise<boolean>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.authenticated)
      }, 1500)
    })
  }
  isAuth():Observable<boolean>{
    return new Observable(observer => {
      if (this.authenticated) {
        observer.next(true)
      } else {
        observer.next(false)
      }
    })
    // return of(this.authenticated)
  }
}
