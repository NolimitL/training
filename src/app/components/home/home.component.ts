import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WindowComponent } from '../window/window.component';
import { RefDirective } from '../window/ref.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(RefDirective, {static: false}) refDir: RefDirective

  constructor(
    private router: Router,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  //Dynamic component
  showWindow(){
    const windowFactory = this.resolver.resolveComponentFactory(WindowComponent) //создаем фактори
    this.refDir.containerRef.clear()
    const component = this.refDir.containerRef.createComponent(windowFactory)
    component.instance.title = 'Modal Window!!!'
    component.instance.closeWindow.subscribe(() => {
      this.refDir.containerRef.clear()
    })
  }


  gotoAbout(){
    this.router.navigate(['/about'])
  }
  gotoPosts(){
    this.router.navigate(['/posts'])
  }

}
