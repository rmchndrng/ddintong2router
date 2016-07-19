import { provideRouter, RouterConfig } from '@angular/router';

import {PrimaryRoutes} from './primary'
import {LeftRoutes} from './left'
import {RightRoutes} from './right'
import {BottomRoutes} from './bottom'
import {TopRoutes} from './top'

export const routes: RouterConfig = [
  ...PrimaryRoutes,
  ...LeftRoutes,
  ...RightRoutes,
  ...BottomRoutes,
  ...TopRoutes  
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes, {enableTracing: true})
];