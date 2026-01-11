import { Project } from './types';

export const HERO_IMAGE_URL = "https://jnmbqnfuouuwzkfzvunh.supabase.co/storage/v1/object/public/gm%20pic/gm%20pic/gm%20t%203.png";

export const PROJECTS: Project[] = [
  {
    id: 'kv-inventory',
    title: 'KV Inventory Platform',
    category: 'Stock & Logistics Control',
    description: 'Enterprise-grade inventory tracking system for high-velocity warehouses.',
    url: 'https://kv-inventory-203582405140.us-west1.run.app/',
    type: 'dashboard'
  },
  {
    id: 'kv-payouts',
    title: 'KV Payouts',
    category: 'Carbon Payouts System',
    description: 'Financial dashboard managing carbon credit disbursements and tracking.',
    url: 'https://carbon-payouts-dashboard-203582405140.us-west1.run.app/',
    type: 'dashboard'
  },
  {
    id: 'kv-fba',
    title: 'KV FBA Management',
    category: 'Amazon Inventory Software',
    description: 'Comprehensive FBA inventory reconciliation and shipment management tool.',
    url: 'https://inventory-admin-203582405140.us-west1.run.app/',
    type: 'dashboard'
  },
  {
    id: 'warehouse-expansion',
    title: 'Warehouse Expansion Analysis',
    category: 'Logistics & Optimization',
    description: 'Strategic dashboard synthesizing historical distribution patterns and carrier zone rates.',
    longDescription: 'Performance metrics are synthesized from multi-year historical distribution patterns and carrier zone rates with geographic distribution data and unit-level breakdowns.',
    url: 'https://kv-multi-warehouse-analysis-203582405140.us-west1.run.app/',
    type: 'analysis'
  },
  {
    id: 'revenue-projection',
    title: 'Next Year Projection',
    category: 'Strategic Forecasting',
    description: 'Revenue models and market expansion projections for the upcoming fiscal cycle.',
    url: 'https://revenue-projections-over-tovdc82.gamma.site/',
    type: 'analysis'
  },
  {
    id: 'stock-performance',
    title: 'Stock Performance',
    category: 'Near-Future Outlook',
    description: 'In-depth analysis of current stock dynamics and anticipated market performance.',
    url: 'https://current-stocks-future-pe-1b35wa4.gamma.site/',
    type: 'analysis'
  }
];