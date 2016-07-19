import { RouterConfig } from '@angular/router';
import {R1Component} from './r1'
import {R2Component} from './r2'
import {R3Component} from './r3'

export const RightRoutes: RouterConfig = [
    { path: '', redirectTo: 'r1',  outlet: 'right', pathMatch:'full' },            
    { path: 'r1', component: R1Component, outlet: 'right' },
    { path: 'r2', component: R2Component , outlet: 'right'},
    { path: 'r3', component: R3Component , outlet: 'right'},
    { path: '**', redirectTo: 'r1', outlet: 'right'},
];