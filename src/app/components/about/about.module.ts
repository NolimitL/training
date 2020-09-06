import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';

const routesAbout: Routes = [
  {path:'', component: AboutComponent, children:[
    {path:'about-extra', component:AboutExtraComponent}
  ]}
]

@NgModule({
  declarations: [
    AboutComponent,
    AboutExtraComponent
  ],
  imports: [
    RouterModule.forChild(routesAbout),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AboutModule { }
