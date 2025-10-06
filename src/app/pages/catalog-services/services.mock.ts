export interface ProviderLogo {
  url: string;
  alt?: string;
}

export interface ProviderRating {
  average: number;
  count: number;
}

export interface Provider {
  orgId: string;
  name: string;
  logo: ProviderLogo;
  rating: ProviderRating;
  countryCode?: string;
  verified?: boolean;
  description?: string;
  totalServices?: number;
}

export interface Tag {
  key: string;
  label: string;
}

export interface PriceFrom {
  currency: string;
  min: number | null;
  max: number | null;
}

export interface Rating {
  average: number;
  count: number;
}

export interface HeroImage {
  url: string;
  alt?: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  title?: string; // optional alias
  shortDescription: string;
  description?: string;
  category: string;
  subcategories?: string[];
  serviceType?: string;
  delivery?: string[];
  pricingModel?: string;
  priceFrom?: PriceFrom;
  leadTimeDays?: number;
  slaHours?: number;
  tags: Tag[];
  status?: string;
  provider: Provider;
  rating?: Rating;
  metrics?: {
    averageRating?: number;
    totalReviews?: number;
    views?: number;
    requests?: number;
    successfulProjects?: number;
  };
  usageCount?: number;
  hero?: HeroImage;
  createdAt?: string;
  updatedAt?: string;
}

export const servicesMock: Service[] = [
  {
    id: "svc_001",
    slug: "cfd-simulation-service",
    name: "CFD Simulation Service",
    shortDescription: "High-quality cfd simulation service for energy projects.",
    category: "Training",
    subcategories: ["Energy", "Forecasting"],
    serviceType: "API",
    delivery: ["Hybrid", "Remote"],
    pricingModel: "PerUse",
    priceFrom: { currency: "EUR", min: 0, max: null },
    leadTimeDays: 6,
    slaHours: 8,
    tags: [
      { key: "bim", label: "BIM" },
      { key: "retrofit", label: "Retrofit" },
      { key: "timeseries", label: "Time Series" }
    ],
    status: "Published",
    provider: {
      orgId: "org_pdbsxw",
      name: "EnerCoop",
      logo: { url: "/assets/logo.png", alt: "logo" },
      rating: { average: 3.3, count: 173 },
      countryCode: "PT"
    },
    rating: { average: 3.7, count: 5 },
    metrics: { averageRating: 3.7, totalReviews: 5 },
    usageCount: 907,
    hero: { url: "/assets/hero.jpg", alt: "CFD Simulation Service" },
    createdAt: "2024-11-24T08:09:48Z",
    updatedAt: "2025-10-06T08:09:48Z"
  },
  {
    id: "svc_002",
    slug: "building-energy-model-calibration",
    name: "Building Energy Model Calibration",
    shortDescription: "High-quality building energy model calibration for energy projects.",
    category: "Simulation",
    subcategories: ["LCA", "ETL"],
    serviceType: "DataProcessing",
    delivery: ["Hybrid", "Onsite"],
    pricingModel: "Free",
    priceFrom: { currency: "EUR", min: 49, max: null },
    leadTimeDays: 4,
    slaHours: 8,
    tags: [
      { key: "ml", label: "ML" },
      { key: "lca", label: "LCA" },
      { key: "bim", label: "BIM" }
    ],
    status: "Published",
    provider: {
      orgId: "org_i72q9y",
      name: "GreenLab",
      logo: { url: "/assets/logo.png", alt: "logo" },
      rating: { average: 4.5, count: 134 },
      countryCode: "GR"
    },
    rating: { average: 4.6, count: 179 },
    metrics: { averageRating: 4.6, totalReviews: 179 },
    usageCount: 503,
    hero: { url: "/assets/hero.jpg", alt: "Building Energy Model Calibration" },
    createdAt: "2025-03-07T08:09:48Z",
    updatedAt: "2025-10-06T08:09:48Z"
  },
  {
    id: "svc_003",
    slug: "timeseries-cleaning-api",
    name: "Timeseries Cleaning API",
    shortDescription: "High-quality timeseries cleaning api for energy projects.",
    category: "Simulation",
    subcategories: ["Energy", "BIM"],
    serviceType: "ManagedService",
    delivery: ["Remote", "Hybrid"],
    pricingModel: "PerUse",
    priceFrom: { currency: "EUR", min: 0, max: null },
    leadTimeDays: 9,
    slaHours: 24,
    tags: [
      { key: "ml", label: "ML" },
      { key: "dt", label: "Digital Twin" },
      { key: "lca", label: "LCA" }
    ],
    status: "Published",
    provider: {
      orgId: "org_i2eg2z",
      name: "TwinForge",
      logo: { url: "/assets/logo.png", alt: "logo" },
      rating: { average: 3.4, count: 15 },
      countryCode: "NL"
    },
    rating: { average: 4.8, count: 103 },
    metrics: { averageRating: 4.8, totalReviews: 103 },
    usageCount: 599,
    hero: { url: "/assets/hero.jpg", alt: "Timeseries Cleaning API" },
    createdAt: "2025-03-13T08:09:48Z",
    updatedAt: "2025-10-06T08:09:48Z"
  },
  {
    id: "svc_004",
    slug: "hpc-batch-job-runner",
    name: "HPC Batch Job Runner",
    shortDescription: "High-quality hpc batch job runner for energy projects.",
    category: "Analytics",
    subcategories: ["ETL", "BIM"],
    serviceType: "SaaS",
    delivery: ["Hybrid", "Onsite"],
    pricingModel: "PerUse",
    priceFrom: { currency: "EUR", min: 199, max: null },
    leadTimeDays: 9,
    slaHours: 72,
    tags: [
      { key: "lca", label: "LCA" },
      { key: "retrofit", label: "Retrofit" },
      { key: "bim", label: "BIM" }
    ],
    status: "Published",
    provider: {
      orgId: "org_dusikf",
      name: "ModelWorks",
      logo: { url: "/assets/logo.png", alt: "logo" },
      rating: { average: 4.5, count: 24 },
      countryCode: "ES"
    },
    rating: { average: 4.6, count: 102 },
    metrics: { averageRating: 4.6, totalReviews: 102 },
    usageCount: 368,
    hero: { url: "/assets/hero.jpg", alt: "HPC Batch Job Runner" },
    createdAt: "2025-06-06T08:09:48Z",
    updatedAt: "2025-10-06T08:09:48Z"
  },
  {
    id: "svc_005",
    slug: "retrofit-scenario-planner",
    name: "Retrofit Scenario Planner",
    shortDescription: "High-quality retrofit scenario planner for energy projects.",
    category: "Training",
    subcategories: ["BIM", "DT"],
    serviceType: "ManagedService",
    delivery: ["Onsite", "Hybrid"],
    pricingModel: "Subscription",
    priceFrom: { currency: "EUR", min: 199, max: null },
    leadTimeDays: 11,
    slaHours: 24,
    tags: [
      { key: "hpc", label: "HPC" },
      { key: "dt", label: "Digital Twin" },
      { key: "lca", label: "LCA" }
    ],
    status: "Published",
    provider: {
      orgId: "org_u2kcni",
      name: "RetroFitters SA",
      logo: { url: "/assets/logo.png", alt: "logo" },
      rating: { average: 4.0, count: 231 },
      countryCode: "IT"
    },
    rating: { average: 4.1, count: 103 },
    metrics: { averageRating: 4.1, totalReviews: 103 },
    usageCount: 152,
    hero: { url: "/assets/hero.jpg", alt: "Retrofit Scenario Planner" },
    createdAt: "2025-05-29T08:09:48Z",
    updatedAt: "2025-10-06T08:09:48Z"
  },
  {
    id: "svc_006",
    slug: "lca-footprint-calculator",
    name: "LCA Footprint Calculator",
    shortDescription: "High-quality lca footprint calculator for energy projects.",
    category: "Data",
    subcategories: ["DT", "Energy"],
    serviceType: "ManagedService",
    delivery: ["Remote", "Onsite"],
    pricingModel: "Quote",
    priceFrom: { currency: "EUR", min: 99, max: null },
    leadTimeDays: 13,
    slaHours: 72,
    tags: [
      { key: "dt", label: "Digital Twin" },
      { key: "hpc", label: "HPC" },
      { key: "lca", label: "LCA" }
    ],
    status: "Published",
    provider: {
      orgId: "org_hdydkc",
      name: "DataSpire",
      logo: { url: "/assets/logo.png", alt: "logo" },
      rating: { average: 3.5, count: 132 },
      countryCode: "SE"
    },
    rating: { average: 3.8, count: 117 },
    metrics: { averageRating: 3.8, totalReviews: 117 },
    usageCount: 709,
    hero: { url: "/assets/hero.jpg", alt: "LCA Footprint Calculator" },
    createdAt: "2025-08-23T08:09:48Z",
    updatedAt: "2025-10-06T08:09:48Z"
  },
  {
    id: "svc_007",
    slug: "pv-forecasting-saas",
    name: "PV Forecasting SaaS",
    shortDescription: "High-quality pv forecasting saas for energy projects.",
    category: "Training",
    subcategories: ["Calibration", "BIM"],
    serviceType: "DataProcessing",
    delivery: ["Hybrid", "Onsite"],
    pricingModel: "Quote",
    priceFrom: { currency: "EUR", min: 49, max: null },
    leadTimeDays: 9,
    slaHours: 24,
    tags: [
      { key: "gis", label: "GIS" },
      { key: "timeseries", label: "Time Series" },
      { key: "retrofit", label: "Retrofit" }
    ],
    status: "Published",
    provider: {
      orgId: "org_0psdha",
      name: "HPCnodes",
      logo: { url: "/assets/logo.png", alt: "logo" },
      rating: { average: 4.2, count: 86 },
      countryCode: "DE"
    },
    rating: { average: 4.7, count: 94 },
    metrics: { averageRating: 4.7, totalReviews: 94 },
    usageCount: 364,
    hero: { url: "/assets/hero.jpg", alt: "PV Forecasting SaaS" },
    createdAt: "2025-02-11T08:09:48Z",
    updatedAt: "2025-10-06T08:09:48Z"
  },
  {
    id: "svc_008",
    slug: "occupancy-analytics-training",
    name: "Occupancy Analytics Training",
    shortDescription: "High-quality occupancy analytics training for energy projects.",
    category: "Data",
    subcategories: ["BIM", "DT"],
    serviceType: "Consulting",
    delivery: ["Hybrid", "Remote"],
    pricingModel: "Free",
    priceFrom: { currency: "EUR", min: 49, max: null },
    leadTimeDays: 3,
    slaHours: 8,
    tags: [
      { key: "gis", label: "GIS" },
      { key: "hpc", label: "HPC" },
      { key: "bim", label: "BIM" }
    ],
    status: "Published",
    provider: {
      orgId: "org_g54x8p",
      name: "RetroFitters SA",
      logo: { url: "/assets/logo.png", alt: "logo" },
      rating: { average: 3.3, count: 60 },
      countryCode: "PT"
    },
    rating: { average: 4.1, count: 186 },
    metrics: { averageRating: 4.1, totalReviews: 186 },
    usageCount: 1028,
    hero: { url: "/assets/hero.jpg", alt: "Occupancy Analytics Training" },
    createdAt: "2025-09-12T08:09:48Z",
    updatedAt: "2025-10-06T08:09:48Z"
  }
];

export default servicesMock;
