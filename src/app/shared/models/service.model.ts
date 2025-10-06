export interface ServiceProvider {
  id: string;
  name: string;
  logo?: string;
  description: string;
  website?: string;
  contactEmail: string;
  verified: boolean;
  rating: number;
  totalServices: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface ServiceTag {
  id: string;
  name: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: ServiceCategory;
  tags: ServiceTag[];
  provider: ServiceProvider;
  pricing: {
    type: 'free' | 'paid' | 'negotiable';
    startingPrice?: number;
    currency?: string;
    billingModel?: 'per-use' | 'subscription' | 'one-time';
  };
  status: 'active' | 'draft' | 'archived';
  validated: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  version: string;
  documentation?: string;
  requirements?: string[];
  deliverables?: string[];
  estimatedDeliveryTime?: string;
  supportLevel: 'basic' | 'standard' | 'premium';
  accessType: 'public' | 'private' | 'restricted';
  metrics: {
    views: number;
    requests: number;
    successfulProjects: number;
    averageRating: number;
    totalReviews: number;
  };
}

export interface ServiceFilter {
  searchQuery?: string;
  categories?: string[];
  tags?: string[];
  providers?: string[];
  pricingTypes?: string[];
  sortBy?: 'name' | 'rating' | 'price' | 'created' | 'popularity';
  sortOrder?: 'asc' | 'desc';
  pageSize?: number;
  page?: number;
}

export interface ServiceListResponse {
  services: Service[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  filters: {
    availableCategories: ServiceCategory[];
    availableTags: ServiceTag[];
    availableProviders: ServiceProvider[];
  };
}