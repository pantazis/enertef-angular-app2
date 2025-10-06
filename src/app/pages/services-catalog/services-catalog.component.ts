import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Service, ServiceFilter, ServiceCategory, ServiceTag } from '../../shared/models/service.model';
import { ServicesService } from '../../shared/services/services.service';

@Component({
  selector: 'app-services-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services-catalog.component.html',
  styleUrls: ['./services-catalog.component.scss']
})
export class ServicesCatalogComponent implements OnInit {
  services: Service[] = [];
  filteredServices: Service[] = [];
  categories: ServiceCategory[] = [];
  tags: ServiceTag[] = [];
  loading = false;
  
  // Filter state
  filter: ServiceFilter = {
    searchQuery: '',
    categories: [],
    tags: [],
    sortBy: 'popularity',
    sortOrder: 'desc',
    page: 1,
    pageSize: 12
  };
  
  // UI state
  selectedService: Service | null = null;
  showServiceDrawer = false;
  viewMode: 'grid' | 'list' = 'grid';
  
  constructor(private servicesService: ServicesService) {}
  
  ngOnInit(): void {
    this.loadServices();
    this.loadCategories();
    this.loadTags();
  }
  
  loadServices(): void {
    this.loading = true;
    this.servicesService.getServices(this.filter).subscribe({
      next: (response) => {
        this.services = response.services;
        this.filteredServices = [...this.services];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading services:', error);
        this.loading = false;
        // Load mock data for development
        this.loadMockServices();
      }
    });
  }
  
  loadCategories(): void {
    this.servicesService.getCategories().subscribe({
      next: (categories) => this.categories = categories,
      error: () => this.loadMockCategories()
    });
  }
  
  loadTags(): void {
    this.servicesService.getTags().subscribe({
      next: (tags) => this.tags = tags,
      error: () => this.loadMockTags()
    });
  }
  
  onSearch(): void {
    this.applyFilters();
  }
  
  onCategoryChange(categoryId: string, checked: boolean): void {
    if (checked) {
      this.filter.categories = [...(this.filter.categories || []), categoryId];
    } else {
      this.filter.categories = (this.filter.categories || []).filter(id => id !== categoryId);
    }
    this.applyFilters();
  }
  
  onTagChange(tagId: string, checked: boolean): void {
    if (checked) {
      this.filter.tags = [...(this.filter.tags || []), tagId];
    } else {
      this.filter.tags = (this.filter.tags || []).filter(id => id !== tagId);
    }
    this.applyFilters();
  }
  
  onSortChange(): void {
    this.applyFilters();
  }
  
  applyFilters(): void {
    let filtered = [...this.services];
    
    // Search filter
    if (this.filter.searchQuery) {
      const query = this.filter.searchQuery.toLowerCase();
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.provider.name.toLowerCase().includes(query)
      );
    }
    
    // Category filter
    if (this.filter.categories && this.filter.categories.length > 0) {
      filtered = filtered.filter(service => 
        this.filter.categories!.includes(service.category.id)
      );
    }
    
    // Tag filter
    if (this.filter.tags && this.filter.tags.length > 0) {
      filtered = filtered.filter(service => 
        service.tags.some(tag => this.filter.tags!.includes(tag.id))
      );
    }
    
    // Sort
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (this.filter.sortBy) {
        case 'name':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'rating':
          comparison = a.metrics.averageRating - b.metrics.averageRating;
          break;
        case 'created':
          comparison = a.createdAt.getTime() - b.createdAt.getTime();
          break;
        case 'popularity':
        default:
          comparison = a.metrics.views - b.metrics.views;
          break;
      }
      return this.filter.sortOrder === 'desc' ? -comparison : comparison;
    });
    
    this.filteredServices = filtered;
  }
  
  openServiceDrawer(service: Service): void {
    this.selectedService = service;
    this.showServiceDrawer = true;
  }
  
  closeServiceDrawer(): void {
    this.showServiceDrawer = false;
    this.selectedService = null;
  }
  
  startServiceRequest(service: Service): void {
    // Navigate to service request flow
    console.log('Starting service request for:', service.title);
    // TODO: Implement navigation to service request flow
  }
  
  contactProvider(service: Service): void {
    // Open contact form or navigate to provider contact
    console.log('Contacting provider:', service.provider.name);
    // TODO: Implement provider contact flow
  }
  
  private loadMockServices(): void {
    // Mock data for development
    this.services = [
      {
        id: '1',
        title: 'Energy Optimization AI',
        description: 'Advanced AI service for optimizing energy consumption in smart buildings using machine learning algorithms.',
        shortDescription: 'AI-powered energy optimization for smart buildings',
        category: { id: 'ai-ml', name: 'AI & Machine Learning', icon: 'fas fa-brain', color: '#6366f1' },
        tags: [{ id: 'ai', name: 'AI', category: 'technology' }, { id: 'energy', name: 'Energy', category: 'domain' }],
        provider: {
          id: 'provider1',
          name: 'EnergyTech Solutions',
          description: 'Leading provider of energy technology solutions',
          contactEmail: 'contact@energytech.com',
          verified: true,
          rating: 4.8,
          totalServices: 12
        },
        pricing: { type: 'paid', startingPrice: 500, currency: 'EUR', billingModel: 'per-use' },
        status: 'active',
        validated: true,
        featured: true,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-10-01'),
        version: '2.1.0',
        estimatedDeliveryTime: '2-4 weeks',
        supportLevel: 'premium',
        accessType: 'public',
        metrics: { views: 1250, requests: 45, successfulProjects: 38, averageRating: 4.7, totalReviews: 23 }
      },
      {
        id: '2',
        title: 'Solar Panel Performance Analytics',
        description: 'Comprehensive analytics platform for monitoring and optimizing solar panel performance across installations.',
        shortDescription: 'Solar panel monitoring and optimization platform',
        category: { id: 'analytics', name: 'Analytics & Monitoring', icon: 'fas fa-chart-line', color: '#10b981' },
        tags: [{ id: 'solar', name: 'Solar', category: 'domain' }, { id: 'monitoring', name: 'Monitoring', category: 'function' }],
        provider: {
          id: 'provider2',
          name: 'Solar Insights Ltd',
          description: 'Specialized in solar energy analytics and optimization',
          contactEmail: 'info@solarinsights.com',
          verified: true,
          rating: 4.6,
          totalServices: 8
        },
        pricing: { type: 'paid', startingPrice: 300, currency: 'EUR', billingModel: 'subscription' },
        status: 'active',
        validated: true,
        featured: false,
        createdAt: new Date('2024-02-20'),
        updatedAt: new Date('2024-09-15'),
        version: '1.5.2',
        estimatedDeliveryTime: '1-2 weeks',
        supportLevel: 'standard',
        accessType: 'public',
        metrics: { views: 890, requests: 32, successfulProjects: 28, averageRating: 4.6, totalReviews: 18 }
      }
      // Add more mock services as needed
    ];
    this.filteredServices = [...this.services];
  }
  
  private loadMockCategories(): void {
    this.categories = [
      { id: 'ai-ml', name: 'AI & Machine Learning', icon: 'fas fa-brain', color: '#6366f1' },
      { id: 'analytics', name: 'Analytics & Monitoring', icon: 'fas fa-chart-line', color: '#10b981' },
      { id: 'simulation', name: 'Simulation & Modeling', icon: 'fas fa-cube', color: '#f59e0b' },
      { id: 'optimization', name: 'Optimization', icon: 'fas fa-cogs', color: '#ef4444' }
    ];
  }
  
  private loadMockTags(): void {
    this.tags = [
      { id: 'ai', name: 'AI', category: 'technology' },
      { id: 'energy', name: 'Energy', category: 'domain' },
      { id: 'solar', name: 'Solar', category: 'domain' },
      { id: 'monitoring', name: 'Monitoring', category: 'function' }
    ];
  }
}