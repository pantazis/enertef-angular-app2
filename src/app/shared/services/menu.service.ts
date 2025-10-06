import { Injectable } from '@angular/core';
import { MenuItem, UserRole } from './role.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuItems: MenuItem[] = [
    // Public Menu Items (Always visible)
    {
      label: 'Home',
      icon: 'fas fa-home',
      route: '/',
      roles: [UserRole.PUBLIC, UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
      requiresAuth: false
    },
    {
      label: 'Services Catalog',
      icon: 'fas fa-store',
      route: '/services-catalog',
      children: [
        {
          label: 'Catalog - Find Partner',
          icon: 'fas fa-handshake',
          route: '/catalog-partner',
          roles: [UserRole.PUBLIC, UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
          requiresAuth: false
        },
        {
          label: 'Catalog - Assets',
          icon: 'fas fa-search',
          route: '/catalog-assets',
          roles: [UserRole.PUBLIC, UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
          requiresAuth: false
        },
        {
          label: 'Catalog - Requests',
          icon: 'fas fa-users',
          route: '/catalog-requests',
          roles: [UserRole.PUBLIC, UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
          requiresAuth: false
        }
      ],
      roles: [UserRole.PUBLIC, UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
      requiresAuth: false
    },
    {
      label: 'Find a Partner',
      icon: 'fas fa-handshake',
      route: '/find-partner',
      roles: [UserRole.PUBLIC, UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
      requiresAuth: false
    },
    {
      label: 'Discover Assets',
      icon: 'fas fa-search',
      route: '/discover-assets',
      roles: [UserRole.PUBLIC, UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
      requiresAuth: false
    },
    {
      label: 'Matchmaking Requests',
      icon: 'fas fa-users',
      route: '/matchmaking-requests',
      roles: [UserRole.PUBLIC, UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
      requiresAuth: false
    },

    // My EnerTEF (Authenticated Users Only)
    {
      label: 'My EnerTEF',
      icon: 'fas fa-user-circle',
      roles: [UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
      requiresAuth: true,
      children: [
        // Common (All authenticated users)
        {
          label: 'Dashboard',
          icon: 'fas fa-tachometer-alt',
          route: '/dashboard',
          roles: [UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Messages',
          icon: 'fas fa-envelope',
          route: '/messages',
          roles: [UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Profile & Settings',
          icon: 'fas fa-cog',
          route: '/profile',
          roles: [UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Billing & Wallet',
          icon: 'fas fa-wallet',
          route: '/billing',
          roles: [UserRole.END_USER, UserRole.SERVICE_DEVELOPER, UserRole.ORGANIZATION_ADMIN, UserRole.TEF_ADMIN, UserRole.NODE_ADMIN],
          requiresAuth: true
        },

        // End-User specific
        {
          label: 'My Organizations',
          icon: 'fas fa-building',
          route: '/my-organizations',
          roles: [UserRole.END_USER],
          requiresAuth: true
        },
        {
          label: 'My Matchmaking Dashboard',
          icon: 'fas fa-handshake',
          route: '/my-matchmaking',
          roles: [UserRole.END_USER],
          requiresAuth: true
        },
        {
          label: 'My Service Requests',
          icon: 'fas fa-clipboard-list',
          route: '/requests',
          roles: [UserRole.END_USER],
          requiresAuth: true
        },
        {
          label: 'Proposals to My Requests',
          icon: 'fas fa-file-alt',
          route: '/proposals',
          roles: [UserRole.END_USER],
          requiresAuth: true
        },
        {
          label: 'My Experiments',
          icon: 'fas fa-flask',
          route: '/experiments',
          roles: [UserRole.END_USER],
          requiresAuth: true
        },
        {
          label: 'My Resource Usage',
          icon: 'fas fa-chart-bar',
          route: '/resource-usage',
          roles: [UserRole.END_USER],
          requiresAuth: true
        },
        {
          label: 'Payments',
          icon: 'fas fa-credit-card',
          route: '/payments',
          roles: [UserRole.END_USER],
          requiresAuth: true
        },
        {
          label: 'My Disputes',
          icon: 'fas fa-exclamation-triangle',
          route: '/my-disputes',
          roles: [UserRole.END_USER],
          requiresAuth: true
        },

        // Service Developer specific
        {
          label: 'Incoming Service Requests',
          icon: 'fas fa-inbox',
          route: '/incoming-requests',
          roles: [UserRole.SERVICE_DEVELOPER],
          requiresAuth: true
        },
        {
          label: 'My Proposals',
          icon: 'fas fa-paper-plane',
          route: '/my-proposals',
          roles: [UserRole.SERVICE_DEVELOPER],
          requiresAuth: true
        },
        {
          label: 'My Services (CMS)',
          icon: 'fas fa-tools',
          route: '/my-services',
          roles: [UserRole.SERVICE_DEVELOPER],
          requiresAuth: true
        },
        {
          label: 'Provider Assets',
          icon: 'fas fa-database',
          route: '/provider-assets',
          roles: [UserRole.SERVICE_DEVELOPER],
          requiresAuth: true
        },
        {
          label: 'Provider Experiments',
          icon: 'fas fa-microscope',
          route: '/provider-experiments',
          roles: [UserRole.SERVICE_DEVELOPER],
          requiresAuth: true
        },
        {
          label: 'Usage & Revenue',
          icon: 'fas fa-chart-line',
          route: '/usage-revenue',
          roles: [UserRole.SERVICE_DEVELOPER],
          requiresAuth: true
        },
        {
          label: 'Provider Disputes',
          icon: 'fas fa-gavel',
          route: '/provider-disputes',
          roles: [UserRole.SERVICE_DEVELOPER],
          requiresAuth: true
        },

        // Organization Admin specific
        {
          label: 'Organization Profile',
          icon: 'fas fa-building-user',
          route: '/org-profile',
          roles: [UserRole.ORGANIZATION_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Team & Roles',
          icon: 'fas fa-users-cog',
          route: '/team-roles',
          roles: [UserRole.ORGANIZATION_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Org Services Portfolio',
          icon: 'fas fa-briefcase',
          route: '/org-services',
          roles: [UserRole.ORGANIZATION_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Org Billing & Contracts',
          icon: 'fas fa-file-contract',
          route: '/org-billing',
          roles: [UserRole.ORGANIZATION_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Org Activity',
          icon: 'fas fa-history',
          route: '/org-activity',
          roles: [UserRole.ORGANIZATION_ADMIN],
          requiresAuth: true
        },

        // TEF Admin specific
        {
          label: 'Validate Services',
          icon: 'fas fa-check-circle',
          route: '/validate-services',
          roles: [UserRole.TEF_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Global Resource Monitoring',
          icon: 'fas fa-server',
          route: '/global-monitoring',
          roles: [UserRole.TEF_ADMIN],
          requiresAuth: true
        },
        {
          label: 'TEF Assets',
          icon: 'fas fa-gem',
          route: '/tef-assets',
          roles: [UserRole.TEF_ADMIN],
          requiresAuth: true
        },
        {
          label: 'All Requests',
          icon: 'fas fa-list',
          route: '/all-requests',
          roles: [UserRole.TEF_ADMIN],
          requiresAuth: true
        },
        {
          label: 'All Proposals',
          icon: 'fas fa-files-o',
          route: '/all-proposals',
          roles: [UserRole.TEF_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Dispute Arbitration',
          icon: 'fas fa-balance-scale',
          route: '/dispute-arbitration',
          roles: [UserRole.TEF_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Nodes & Agents Registry',
          icon: 'fas fa-network-wired',
          route: '/nodes-registry',
          roles: [UserRole.TEF_ADMIN],
          requiresAuth: true
        },

        // Node Admin specific
        {
          label: 'Register TEF Node',
          icon: 'fas fa-plus-circle',
          route: '/register-node',
          roles: [UserRole.NODE_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Install HPC Agent',
          icon: 'fas fa-download',
          route: '/install-agent',
          roles: [UserRole.NODE_ADMIN],
          requiresAuth: true
        },
        {
          label: 'Node Monitoring',
          icon: 'fas fa-monitor-heart-rate',
          route: '/node-monitoring',
          roles: [UserRole.NODE_ADMIN],
          requiresAuth: true
        }
      ]
    }
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  filterMenuByRole(userRoles: UserRole[], isAuthenticated: boolean): MenuItem[] {
    return this.menuItems
      .filter(item => this.hasAccess(item, userRoles, isAuthenticated))
      .map(item => ({
        ...item,
        children: item.children 
          ? item.children.filter(child => this.hasAccess(child, userRoles, isAuthenticated))
          : undefined
      }));
  }

  private hasAccess(item: MenuItem, userRoles: UserRole[], isAuthenticated: boolean): boolean {
    // Check if authentication is required
    if (item.requiresAuth && !isAuthenticated) {
      return false;
    }

    // Check if user has required role
    return item.roles.some(role => userRoles.includes(role));
  }
}