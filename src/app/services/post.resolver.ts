import { HTTPPostService } from './http-post.service';
import { PostSevice } from 'src/app/services/post.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Posts, GettedPost } from '../interfaces/posts.interface';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})
export class PostResolver implements Resolve<GettedPost>{

  constructor(
    private httpService: HTTPPostService
  ){}

    //Через резолвер лучше обращаться на сервер или в сервис
    /*
      Resolver - звено между сервером и компонентом для о чтобы
      сначала дать данным, которые нужны для отображения, загрузиться а том открыть компонент
  //   */
  /* resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Posts | Observable<Posts> | Promise<Posts> {
      return of(this.postService.getPostById(+route.params['id']))
        .pipe(
          delay(2000)
        )
*/
// Through HTTP request
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): GettedPost | Observable<GettedPost> | Promise<GettedPost> {
    console.log('Data from RESOLVER:', this.httpService.getList())
    return this.httpService.getList()
  }

}

