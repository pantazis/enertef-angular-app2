
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RoleService, UserProfile, UserRole } from '../services/role.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  // Expose UserRole enum for template use
  UserRole = UserRole;
  
  // Current user from RoleService
  currentUser: UserProfile = {
    id: '',
    name: 'Guest User',
    email: '',
    roles: [UserRole.NO_LOGIN],
    isAuthenticated: false
  };
  private subscription: Subscription = new Subscription();
  
  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.roleService.currentUser$.subscribe(user => {
        this.currentUser = user;
        // Auto-expand My EnerTEF section when user logs in
        if (user.isAuthenticated) {
          this.expandedSections['my-enertef'] = true;
        } else {
          // Collapse all authenticated sections when logged out
          this.expandedSections['my-enertef'] = false;
          this.expandedSections['end-user'] = false;
          this.expandedSections['service-developer'] = false;
          this.expandedSections['org-admin'] = false;
          this.expandedSections['tef-admin'] = false;
          this.expandedSections['node-admin'] = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Track collapsed/expanded state of menu sections
  expandedSections: { [key: string]: boolean } = {
    'my-enertef': false,
    'end-user': false,
    'service-developer': false,
    'org-admin': false,
    'tef-admin': false,
    'node-admin': false
  };

  // Public menu items (always visible)
  publicMenuItems = [    
    { path: '/services-catalog', label: 'Services Catalog', icon: 'fas fa-list' },
    { path: '/grid', label: 'Find a Partner', icon: 'fas fa-handshake' },
    { path: '/colors', label: 'Discover Assets', icon: 'fas fa-gem' },
    { path: '/requests', label: 'Matchmaking Requests', icon: 'fas fa-search' }
  ];

  // Common authenticated user menu items
  commonMenuItems = [
    { path: '/typography', label: 'Dashboard', icon: 'fas fa-chart-bar' },
    { path: '/components', label: 'Messages / Notifications', icon: 'fas fa-comments' },
    { path: '/auth', label: 'Profile & Settings', icon: 'fas fa-cog' },
    { path: '/payments', label: 'Billing / Wallet', icon: 'fas fa-credit-card' }
  ];

  // End-User specific menu items
  endUserMenuItems = [
    { path: '/components', label: 'My Organisations', icon: 'fas fa-building' },
    { path: '/requests', label: 'My Matchmaking Dashboard', icon: 'fas fa-bullseye' },
    { path: '/requests', label: 'My Service Requests', icon: 'fas fa-file-alt' },
    { path: '/proposals', label: 'Proposals to My Requests', icon: 'fas fa-file-contract' },
    { path: '/experiments', label: 'My Experiments (Workbench)', icon: 'fas fa-flask' },
    { path: '/resources', label: 'My Resource Usage', icon: 'fas fa-chart-line' },
    { path: '/payments', label: 'Payments', icon: 'fas fa-dollar-sign' },
    { path: '/components', label: 'My Disputes', icon: 'fas fa-balance-scale' }
  ];

  // Service Developer menu items
  serviceDeveloperMenuItems = [
    { path: '/requests', label: 'Incoming Service Requests', icon: 'fas fa-inbox' },
    { path: '/proposals', label: 'My Proposals', icon: 'fas fa-file-alt' },
    { path: '/components', label: 'My Services (Provider CMS)', icon: 'fas fa-tools' },
    { path: '/resources', label: 'Provider Assets', icon: 'fas fa-database' },
    { path: '/experiments', label: 'Provider Experiments', icon: 'fas fa-vial' },
    { path: '/resources', label: 'Provider Usage & Revenue', icon: 'fas fa-chart-area' },
    { path: '/components', label: 'Provider Disputes', icon: 'fas fa-balance-scale' }
  ];

  // Organization Admin menu items
  orgAdminMenuItems = [
    { path: '/components', label: 'Organization Profile Admin', icon: 'fas fa-university' },
    { path: '/auth', label: 'Team & Roles', icon: 'fas fa-users' },
    { path: '/components', label: 'Org Services Portfolio', icon: 'fas fa-folder-open' },
    { path: '/payments', label: 'Org Billing / Contracts', icon: 'fas fa-file-invoice' },
    { path: '/components', label: 'Org Activity', icon: 'fas fa-chart-bar' }
  ];

  // TEF Admin menu items
  tefAdminMenuItems = [
    { path: '/proposals', label: 'Validate Services / Proposals', icon: 'fas fa-check-circle' },
    { path: '/resources', label: 'Resource Monitoring (Global)', icon: 'fas fa-globe' },
    { path: '/resources', label: 'My TEF Assets', icon: 'fas fa-landmark' },
    { path: '/requests', label: 'Requests (global)', icon: 'fas fa-globe-americas' },
    { path: '/proposals', label: 'Proposals (global)', icon: 'fas fa-globe-europe' },
    { path: '/components', label: 'Disputes (Arbitration)', icon: 'fas fa-gavel' },
    { path: '/resources', label: 'Nodes & Agents Registry', icon: 'fas fa-server' }
  ];

  // Node Admin menu items
  nodeAdminMenuItems = [
    { path: '/components', label: 'Register TEF Node', icon: 'fas fa-link' },
    { path: '/components', label: 'Install HPC Agent', icon: 'fas fa-cog' },
    { path: '/resources', label: 'Node Monitoring', icon: 'fas fa-satellite-dish' }
  ];

  toggleSection(section: string) {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  get isLoggedIn(): boolean {
    return this.currentUser.isAuthenticated;
  }

  get isNoLoginRole(): boolean {
    return this.hasRole(UserRole.NO_LOGIN);
  }

  get shouldShowMyEnerTEF(): boolean {
    return this.isLoggedIn && !this.isNoLoginRole;
  }

  hasRole(role: UserRole): boolean {
    return this.roleService.hasRole(role);
  }

  hasAnyRole(roles: UserRole[]): boolean {
    return this.roleService.hasAnyRole(roles);
  }

  // Toggle login state for testing - now uses RoleService
  toggleLogin() {
    if (this.currentUser.isAuthenticated) {
      this.roleService.logout();
    } else {
      this.roleService.login('demo@enertef.eu', [UserRole.END_USER]);
    }
  }

  // Helper method to get current role display name
  getCurrentRoleLabel(): string {
    if (this.currentUser.roles.length > 0) {
      const roleLabels: { [key in UserRole]: string } = {
        [UserRole.NO_LOGIN]: '🚫 No Login (Guest)',
        [UserRole.PUBLIC]: '🌍 Public (Visitor)',
        [UserRole.END_USER]: '🟢 End-User (Requester)',
        [UserRole.SERVICE_DEVELOPER]: '🔵 Service Developer (Provider)',
        [UserRole.ORGANIZATION_ADMIN]: '🟠 Organization Admin',
        [UserRole.TEF_ADMIN]: '🔴 TEF Admin',
        [UserRole.NODE_ADMIN]: '🟣 Node Admin'
      };
      return roleLabels[this.currentUser.roles[0]];
    }
    return '🚫 No Login (Guest)';
  }
}
