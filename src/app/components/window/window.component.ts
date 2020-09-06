import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Input() title = 'Default title!!!'
  @Output() closeWindow =  new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

}
