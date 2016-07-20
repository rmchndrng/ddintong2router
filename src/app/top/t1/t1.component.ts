import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-t1',
  templateUrl: 't1.component.html',
  styleUrls: ['t1.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class T1Component implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
