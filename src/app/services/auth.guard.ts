import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
    return this.authService.isAuth().pipe(
      map(isAuth => {
        if (isAuth == true) {
          return true
        }else{
          console.log(this.router.url)
          this.router.navigate(['/home'], {
            queryParams:{
              auth: false
            }
          })
          return false
        }
      })
      )
  // return this.authService.isAuth().pipe(
    //   map(isAuth => {
      //     if (isAuth) {
        //       return true
        //     } else {
          //       console.log('Current URL:', this.router.url)
          //       this.router.navigate([this.router.url])
          //       return false
          //     }
          //   })
          // )
 }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state)
  }
}
