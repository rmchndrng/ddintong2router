import { RouterConfig } from '@angular/router';
import {B1Component} from './b1'
import {B2Component} from './b2'
import {B3Component} from './b3'

export const BottomRoutes: RouterConfig = [
    { path: '', redirectTo: 'b1',  outlet: 'bottom', pathMatch:'full' },           
    { path: 'b1', component: B1Component, outlet: 'bottom' },
    { path: 'b2', component: B2Component , outlet: 'bottom'},
    { path: 'b3', component: B3Component , outlet: 'bottom'},
    { path: '**', redirectTo: 'b1', outlet:'bottom'},
];