import { RouterConfig } from '@angular/router';
import {T1Component, T1Child1Component, T1Child2Component, T1Child3Component} from './t1'
import {T2Component} from './t2'
import {T3Component} from './t3'

export const TopRoutes: RouterConfig = [
    { path: '', redirectTo: 't1', outlet: 'top', pathMatch: 'full' },
    {
        path: 't1', component: T1Component, outlet: 'top', children: [
            { path: '', redirectTo: 'c1', pathMatch: 'full' },
            { path: 'c1', component: T1Child1Component },
            { path: 'c2', component: T1Child2Component },
            { path: 'c3', component: T1Child3Component },
            { path: '**', redirectTo: 'c1' },
        ]
    },
    { path: 't2', component: T2Component, outlet: 'top' },
    { path: 't3', component: T3Component, outlet: 'top' },
    { path: '**', redirectTo: 't1', outlet: 'top' },
];