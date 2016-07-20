import { RouterConfig } from '@angular/router';
import { B1Right1Component} from './b1-right1'
import { B1Right2Component} from './b1-right2'
import { B1Right3Component} from './b1-right3'

export const B1RightRoutes: RouterConfig = [
    { path: '', redirectTo: 'b1r1', pathMatch: 'full',  outlet:'bright' },
    { path: 'b1r1', component: B1Right1Component, outlet:'bright' },
    { path: 'b1r2', component: B1Right2Component, outlet:'bright'},
    { path: 'b1r3', component: B1Right3Component, outlet:'bright' },
    { path: '**', redirectTo: 'b1r1', outlet:'bright' }
];