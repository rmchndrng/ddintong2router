import { RouterConfig } from '@angular/router';
import {P1Component} from './p1'
import {P2Component} from './p2'
import {P3Component} from './p3'

export const PrimaryRoutes: RouterConfig = [
    { path: '', redirectTo: 'p1', pathMatch: 'full' },
    { path: '**', redirectTo: 'p1'},
    { path: 'p1', component:P1Component },
    { path: 'p2', component:P2Component },
    { path: 'p3', component:P3Component }    
];