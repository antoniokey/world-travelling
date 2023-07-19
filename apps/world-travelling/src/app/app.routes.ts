import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'profile',
    loadChildren: () => import('profile/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'intrerests',
    loadChildren: () => import('intrerests/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
