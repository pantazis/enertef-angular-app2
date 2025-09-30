import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, LayoutComponent],
  template: `
    <app-header></app-header>
    <app-layout></app-layout>
  `,
})
export class AppComponent {}
