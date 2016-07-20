import { RouterConfig } from '@angular/router';
import {B1Component, B1Child1Component, B1Child2Component, B1Child3Component, B1LeftRoutes, B1RightRoutes} from './b1'
import {B2Component} from './b2'
import {B3Component} from './b3'

export const BottomRoutes: RouterConfig = [
    { path: '', redirectTo: 'b1', outlet: 'bottom', pathMatch: 'full' },
    {
        path: 'b1', component: B1Component, outlet: 'bottom', children: [
            { path: '', redirectTo: 'c1', pathMatch: 'full' },
            { path: 'c1', component: B1Child1Component },
            { path: 'c2', component: B1Child2Component },
            { path: 'c3', component: B1Child3Component },            
            { path: '**', redirectTo: 'c1' },
        ]
    },
    { path: 'b2', component: B2Component, outlet: 'bottom' },
    { path: 'b3', component: B3Component, outlet: 'bottom' },
    { path: '**', redirectTo: 'b1', outlet: 'bottom' }
];