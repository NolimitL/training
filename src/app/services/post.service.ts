import { Posts } from './../interfaces/posts.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"root"
})
export class PostSevice{
  posts:Posts[] = [
    {id:11, title:'First post', text:'I codes with Angular 10'},
    {id:22, title:'Second post', text:'I like to talk with clever people'},
    {id:33, title:'Third post', text:'Angular is very conveniet tool to make a web application'},
    {id:44, title:'Fourth post', text:'I will do this.'}
  ]

  constructor(){}

  getPostById(id:number){
    return this.posts.find(post => post.id == id)
  }
  lastPost(){
    return this.posts[this.posts.length - 1]
  }
}
