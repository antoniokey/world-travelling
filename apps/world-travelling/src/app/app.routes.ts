import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'profile',
    loadChildren: () =>
      import('profile/Module').then((m) => m.RemoteEntryModule),
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
