import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector:'[modalWindow]'
})
export class RefDirective{
  constructor(public containerRef: ViewContainerRef){
  }
}
