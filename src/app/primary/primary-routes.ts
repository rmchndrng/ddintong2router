import { RouterConfig } from '@angular/router';
import {P1Component, P1Child1Component, P1Child2Component, P1Child3Component} from './p1'
import {P2Component} from './p2'
import {P3Component} from './p3'

export const PrimaryRoutes: RouterConfig = [
    { path: '', redirectTo: 'p1', pathMatch: 'full' },
    {
        path: 'p1', component: P1Component, children: [
            { path: '', redirectTo: 'c1', pathMatch: 'full' },
            { path: 'c1', component: P1Child1Component },
            { path: 'c2', component: P1Child2Component },
            { path: 'c3', component: P1Child3Component },
            { path: '**', redirectTo: 'c1' },
        ]
    },
    { path: 'p2', component: P2Component },
    { path: 'p3', component: P3Component },
    { path: '**', redirectTo: 'p1' }
];