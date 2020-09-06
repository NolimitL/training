import { GettedPost } from 'src/app/interfaces/posts.interface';
import { ActivatedRoute } from '@angular/router';
import { PostSevice } from './../../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { HTTPPostService } from 'src/app/services/http-post.service';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  gettedList: GettedPost[] = []

  constructor(
    private activeRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.activeRoute.data
      .pipe(
        tap(list => this.gettedList = list.dataHTTP)
      )
      .subscribe(data => {
        console.log("Data from COMP:", data)
    })
    // this.httpService.getList().subscribe(data => {
    //   console.log(data)
    // })
  }

}
