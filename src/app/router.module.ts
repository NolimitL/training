import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', loadChildren: () => import('./components/about/about.module')
      .then(moduleAbout => moduleAbout.AboutModule)
    },
  {path:'posts', loadChildren: () => import('./components/posts/posts.module')
      .then(modulePost => modulePost.PostsModule), canActivate: [AuthGuard]},
  {path:'error', component:ErrorPageComponent},
  {path:'**', redirectTo:'/error'}
]

@NgModule({
  imports:[RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules
  })],
  exports:[RouterModule]
})
export class RoutingModule{

}
