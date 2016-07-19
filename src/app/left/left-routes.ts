import { RouterConfig } from '@angular/router';
import {L1Component} from './l1'
import {L2Component} from './l2'
import {L3Component} from './l3'

export const LeftRoutes: RouterConfig = [
    { path: '', redirectTo: 'l1',  outlet: 'left', pathMatch:'full' },
    { path: 'l1', component: L1Component, outlet: 'left' },
    { path: 'l2', component: L2Component , outlet: 'left'},
    { path: 'l3', component: L3Component , outlet: 'left'},
    { path: '**', redirectTo: 'l1', outlet: 'left'},
];