import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-p1',
  templateUrl: 'p1.component.html',
  styleUrls: ['p1.component.css']
})
export class P1Component implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    console.log(this.router);
    console.log(this.activatedRoute);
  }

}
