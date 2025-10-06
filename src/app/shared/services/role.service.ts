import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum UserRole {
  NO_LOGIN = 'no-login',
  PUBLIC = 'public',
  END_USER = 'end-user',
  SERVICE_DEVELOPER = 'service-developer', 
  ORGANIZATION_ADMIN = 'organization-admin',
  TEF_ADMIN = 'tef-admin',
  NODE_ADMIN = 'node-admin'
}

export interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  roles: UserRole[];
  requiresAuth: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
  isAuthenticated: boolean;
  organization?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private currentUserSubject = new BehaviorSubject<UserProfile>({
    id: '',
    name: 'Guest User',
    email: '',
    roles: [UserRole.NO_LOGIN],
    isAuthenticated: false
  });

  public currentUser$: Observable<UserProfile> = this.currentUserSubject.asObservable();

  constructor() {
    // Simulate checking for existing session on service initialization
    this.checkExistingSession();
  }

  private checkExistingSession(): void {
    // This would normally check with Keycloak or another auth provider
    // For now, we'll check localStorage for demo purposes
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.currentUserSubject.next(user);
      } catch (e) {
        console.error('Error parsing stored user data:', e);
      }
    }
  }

  getCurrentUser(): UserProfile {
    return this.currentUserSubject.value;
  }

  getCurrentRoles(): UserRole[] {
    return this.currentUserSubject.value.roles;
  }

  hasRole(role: UserRole): boolean {
    return this.currentUserSubject.value.roles.includes(role);
  }

  hasAnyRole(roles: UserRole[]): boolean {
    const userRoles = this.currentUserSubject.value.roles;
    return roles.some(role => userRoles.includes(role));
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value.isAuthenticated;
  }

  // Simulate login with different roles (until Keycloak is integrated)
  login(email: string, roles: UserRole[] = [UserRole.END_USER]): void {
    const user: UserProfile = {
      id: Math.random().toString(36).substring(7),
      name: email.split('@')[0],
      email: email,
      roles: roles,
      isAuthenticated: true,
      organization: roles.includes(UserRole.ORGANIZATION_ADMIN) ? 'Demo Organization' : undefined
    };

    this.currentUserSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout(): void {
    const publicUser: UserProfile = {
      id: '',
      name: 'Guest User',
      email: '',
      roles: [UserRole.NO_LOGIN],
      isAuthenticated: false
    };

    this.currentUserSubject.next(publicUser);
    localStorage.removeItem('currentUser');
  }

  // Demo method to switch roles for testing
  switchRole(roles: UserRole[]): void {
    const currentUser = this.currentUserSubject.value;
    if (currentUser.isAuthenticated) {
      const updatedUser = { ...currentUser, roles };
      this.currentUserSubject.next(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  }

  // Get available roles for demo purposes
  getAvailableRoles(): { value: UserRole, label: string }[] {
    return [
      { value: UserRole.NO_LOGIN, label: '🚫 No Login (Guest)' },
      { value: UserRole.PUBLIC, label: '🌍 Public (Visitor)' },
      { value: UserRole.END_USER, label: '🟢 End-User (Requester)' },
      { value: UserRole.SERVICE_DEVELOPER, label: '🔵 Service Developer (Provider)' },
      { value: UserRole.ORGANIZATION_ADMIN, label: '🟠 Organization Admin' },
      { value: UserRole.TEF_ADMIN, label: '🔴 TEF Admin' },
      { value: UserRole.NODE_ADMIN, label: '🟣 Node Admin' }
    ];
  }
}