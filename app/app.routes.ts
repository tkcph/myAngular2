import { provideRouter, RouterConfig }  from '@angular/router';
import { PageOneComponent } from './pages/page-one.component';
import { PageTwoComponent } from './pages/page-two.component';

const routes: RouterConfig = [
    { path: 'one', component: PageOneComponent },
    { path: 'two', component: PageTwoComponent },
    { path: '', component: PageOneComponent }
];

export const AppRouterProviders = [
  provideRouter(routes)
];