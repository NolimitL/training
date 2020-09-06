import { Posts } from './../../../interfaces/posts.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostSevice } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post:Posts
  lastIdPost:number
  showID = true

  constructor(
    private activeRoute: ActivatedRoute,  //для работы с переданными параметрами
    private postService: PostSevice,
    private router: Router
  ) { }

  ngOnInit() {
    // Через data обращаемся к резолверу
    this.activeRoute.data.subscribe(data => {
      console.log("Data:", data)
      this.post = data.postData
    })
    // Лучше для загрузки данных использовать не Компонент а Резолвер
    // this.activeRoute.params.subscribe((params:Params) => {
    //   // console.log("Params from id: ", params)
    //   this.post = this.postService.getPostById(+params.id)
    // })

    this.lastIdPost = this.postService.lastPost().id
    this.activeRoute.queryParams.subscribe((params:Params) => {
      console.log("query Params:", !params.showID)
      this.showID = !params.showID
    })
  }
  hideID(){
    this.router.navigate(['/posts', this.post.id], {
      queryParams:{
        showID: false
      }
    })
  }
  goto4(){
    if(this.showID){
      this.router.navigate(['/posts', this.lastIdPost])
    }else{
      this.router.navigate(['/posts', this.lastIdPost], {
        queryParams:{
          showID: false
        }
      })
    }
  }

}
