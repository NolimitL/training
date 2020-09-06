import { Router } from '@angular/router';
import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalDirective } from '../modal.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @ViewChild(ModalDirective, {static:false}) directive: ModalDirective //для обращения к Директиве

  constructor(
    private router: Router,
    private factoryComponent:ComponentFactoryResolver  //для создания Фактори
  ) { }


  showModal(){
    const factory = this.factoryComponent.resolveComponentFactory(ModalComponent)
    this.directive.componentView.clear()
    const component = this.directive.componentView.createComponent(factory)
    component.instance.title = 'Modal works!'
    component.instance.close.subscribe(() => {
      this.directive.componentView.clear()
    })
  }


  ngOnInit() {
  }
  hideExtra(){
    this.router.navigate(['/about'],)
  }

}
