import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loggedIn = false;
  userMenuOpen = false;

  toggleUserMenu() { this.userMenuOpen = !this.userMenuOpen; }
  login() { this.loggedIn = true; this.userMenuOpen = false; }
  logout() { this.loggedIn = false; this.userMenuOpen = false; }

}
