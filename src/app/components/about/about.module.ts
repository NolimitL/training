import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from './modal.directive';

const routesAbout: Routes = [
  {path:'', component: AboutComponent, children:[
    {path:'about-extra', component:AboutExtraComponent}
  ]}
]

@NgModule({
  declarations: [
    AboutComponent,
    AboutExtraComponent,
    ModalComponent,
    ModalDirective
  ],
  imports: [
    RouterModule.forChild(routesAbout),
    CommonModule
  ],
  entryComponents:[ModalComponent],
  exports:[RouterModule]
})
export class AboutModule { }
