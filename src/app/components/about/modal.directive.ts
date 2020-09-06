import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector:'[modalWindow]'
})
export class ModalDirective{
  constructor(public componentView: ViewContainerRef){}
}
