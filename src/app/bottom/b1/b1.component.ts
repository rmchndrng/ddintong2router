import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-b1',
  templateUrl: 'b1.component.html',
  styleUrls: ['b1.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class B1Component implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
