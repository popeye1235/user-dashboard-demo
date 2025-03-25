import { Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

// Define routes
export const appRoutes: Routes = [
  { path: '', component: UserDashboardComponent }, // Default route
  { 
    path: 'add-user', 
    loadChildren: () => import('./components/user-form/user-form.module').then(m => m.UserFormModule)  //lazy loading
  }
];
