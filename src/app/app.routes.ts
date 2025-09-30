// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'typography' },
  { path: 'typography', loadComponent: () => import('./pages/typography/typography.component').then(m => m.TypographyComponent) },
  { path: 'colors', loadComponent: () => import('./pages/colors/colors.component').then(m => m.ColorsComponent) },
  { path: 'auth', loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent) },
  { path: 'requests', loadComponent: () => import('./pages/requests/requests.component').then(m => m.RequestsComponent) },
  { path: 'proposals', loadComponent: () => import('./pages/proposals/proposals.component').then(m => m.ProposalsComponent) },
  { path: 'experiments', loadComponent: () => import('./pages/experiments/experiments.component').then(m => m.ExperimentsComponent) },
  { path: 'resources', loadComponent: () => import('./pages/resources/resources.component').then(m => m.ResourcesComponent) },
  { path: 'payments', loadComponent: () => import('./pages/payments/payments.component').then(m => m.PaymentsComponent) },
  { path: 'components', loadComponent: () => import('./pages/components/components.component').then(m => m.ComponentsComponent) },
  { path: 'grid', loadComponent: () => import('./pages/grid/grid.component').then(m => m.GridComponent) },
  { path: '**', redirectTo: 'typography' }
];
