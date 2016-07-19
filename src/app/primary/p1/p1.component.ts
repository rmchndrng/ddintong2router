import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, UrlTree, UrlPathWithParams} from '@angular/router';
import {UrlSegment} from '@angular/router/src/url_tree';
@Component({
  moduleId: module.id,
  selector: 'app-p1',
  templateUrl: 'p1.component.html',
  styleUrls: ['p1.component.css']
})
export class P1Component implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    // console.log(this.router);
    // console.log(this.activatedRoute);
    // let currentUrlTree = this.router.parseUrl(this.router.url);
    
    // console.log(currentUrlTree);
    // // let newUrlTree = this.router.createUrlTree(['right:r1']);
    // // this.router.navigateByUrl(this.router.serializeUrl(newUrlTree));
    // // let test:UrlPathWithParams =new UrlPathWithParams('r1',{});
    // console.log(currentUrlTree.root.children["PRIMARY_OUTLET"]);
    // let urlSegment:UrlSegment = currentUrlTree.root.children["PRIMARY_OUTLET"];
    // let newAuxSegment:UrlSegment = new UrlSegment([new UrlPathWithParams('r1',{})],{});    
    // let newAuxSegment2:UrlSegment = new UrlSegment([new UrlPathWithParams('l1',{})],{});
    // let newUrlSegment:UrlSegment = new UrlSegment([],{
    //   'PRIMARY_OUTLET':urlSegment,
    //   'right':newAuxSegment,
    //   'left':newAuxSegment2
    // })
    // console.log(newUrlSegment);
    // let testUrlTree:UrlTree = new UrlTree();
    // testUrlTree.root = newUrlSegment;
    // testUrlTree.fragment= currentUrlTree.fragment;
    // testUrlTree.queryParams = currentUrlTree.queryParams;
    // this.router.navigateByUrl(this.router.serializeUrl(testUrlTree));
    // // this.router.parseUrl()

  }

}
