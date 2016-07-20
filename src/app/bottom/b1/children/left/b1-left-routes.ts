import { RouterConfig } from '@angular/router';
import { B1Left1Component} from './b1-left1'
import { B1Left2Component} from './b1-left2'
import { B1Left3Component} from './b1-left3'

export const B1LeftRoutes: RouterConfig = [
    { path: '', redirectTo: 'b1l1', pathMatch: 'full',  outlet:'bleft' },
    { path: 'b1l1', component: B1Left1Component, outlet:'bleft' },
    { path: 'b1l2', component: B1Left2Component, outlet:'bleft'},
    { path: 'b1l3', component: B1Left3Component, outlet:'bleft' },
    { path: '**', redirectTo: 'b1l1', outlet:'bleft' }
];