import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RoleService, UserProfile, UserRole } from '../services/role.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: UserProfile = {
    id: '',
    name: 'Guest User',
    email: '',
    roles: [UserRole.PUBLIC],
    isAuthenticated: false
  };
  userMenuOpen = false;
  roleMenuOpen = false;
  availableRoles: { value: UserRole, label: string }[] = [];
  selectedDemoRole = UserRole.END_USER;
  private subscription: Subscription = new Subscription();

  constructor(private roleService: RoleService) {
    this.availableRoles = this.roleService.getAvailableRoles();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.roleService.currentUser$.subscribe(user => {
        this.currentUser = user;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get loggedIn(): boolean {
    return this.currentUser.isAuthenticated;
  }

  toggleUserMenu(): void {
    this.userMenuOpen = !this.userMenuOpen;
    this.roleMenuOpen = false;
  }

  toggleRoleMenu(): void {
    this.roleMenuOpen = !this.roleMenuOpen;
    this.userMenuOpen = false;
  }

  login(): void {
    // Demo login - in production this would redirect to Keycloak
    this.roleService.login('demo@enertef.eu', [this.selectedDemoRole]);
    this.userMenuOpen = false;
  }

  logout(): void {
    this.roleService.logout();
    this.userMenuOpen = false;
    this.roleMenuOpen = false;
  }

  switchToRole(role: UserRole): void {
    if (this.currentUser.isAuthenticated) {
      this.roleService.switchRole([role]);
    }
    this.roleMenuOpen = false;
  }

  getRoleLabel(role: UserRole): string {
    const roleInfo = this.availableRoles.find(r => r.value === role);
    return roleInfo ? roleInfo.label : role;
  }

  getCurrentRoleLabel(): string {
    if (this.currentUser.roles.length > 0) {
      return this.getRoleLabel(this.currentUser.roles[0]);
    }
    return '🌍 Public (Visitor)';
  }
}
