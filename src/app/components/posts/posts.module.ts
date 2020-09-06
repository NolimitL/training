import { AuthGuard } from './../../services/auth.guard';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostInputComponent } from './post-input/post-input.component';
import { PostResolver } from 'src/app/services/post.resolver';
import { HttpPostInterceptor } from 'src/app/services/http-post.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



const routesPosts: Routes = [
  {path:'', component: PostsListComponent, canActivateChild:[AuthGuard] ,children:[
    {path:'post-input', component:PostInputComponent},
  ], resolve:{
    dataHTTP: PostResolver
  }},
  {
    path:':id',
    component:PostComponent,
    // resolve: {
    //   postData: PostResolver
    // }
  }
]

@NgModule({
  declarations: [
    PostsListComponent,
    PostInputComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routesPosts)
  ],
  providers:[],
  exports:[RouterModule]
})
export class PostsModule { }
