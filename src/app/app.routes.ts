import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'UDHIRAM HOME CARE NURSING | Compassionate Home Nursing Care' },
  { path: '**', redirectTo: '' }
];
