export interface CostCalculationInputs {
    storage_TiB: number;
    egress_percent: number;
  }
  
  export interface ProviderCost {
    company: string;
    logo: string;
    cost: number;
    height: { mobile: number; tablet: number; desktop: number };
    highlight?: boolean;
  }
  
  export interface CostCalculationResult {
    google: number;
    aws: number;
    azure: number;
    storacha: number;
    highest_competitor: number;
    annual_savings: number;
    savings_percent: number;
  }
  
  // Storage cost per TiB per month
  const STORAGE_COSTS = {
    google: 10,
    aws: 12.5,
    azure: 10,
    storacha: 5.99,
  };
  
  // Egress cost per TiB
  const EGRESS_COSTS = {
    google: 120,
    aws: 100,
    azure: 100,
    storacha: 10,
  };
  
  export function calculateAnnualCosts(
    storage_TiB: number,
    egress_percent: number
  ): CostCalculationResult {
    // Calculate egress in TiB
    const egress_TiB = storage_TiB * (egress_percent / 100);
  
    // Calculate annual costs for each provider
    const google =
      (storage_TiB * STORAGE_COSTS.google +
        egress_TiB * EGRESS_COSTS.google) *
      12;
    const aws =
      (storage_TiB * STORAGE_COSTS.aws + egress_TiB * EGRESS_COSTS.aws) *
      12;
    const azure =
      (storage_TiB * STORAGE_COSTS.azure +
        egress_TiB * EGRESS_COSTS.azure) *
      12;
    const storacha =
      (storage_TiB * STORAGE_COSTS.storacha +
        egress_TiB * EGRESS_COSTS.storacha) *
      12;
  
    // Find the highest competitor cost
    const highest_competitor = Math.max(google, aws, azure);
  
    // Calculate savings
    const annual_savings = highest_competitor - storacha;
    const savings_percent = (annual_savings / highest_competitor) * 100;
  
    return {
      google,
      aws,
      azure,
      storacha,
      highest_competitor,
      annual_savings,
      savings_percent,
    };
  }
  
  export function calculateBarHeights(
    costs: CostCalculationResult
  ): ProviderCost[] {
    // Find the max cost for scaling
    const maxCost = Math.max(
      costs.storacha,
      costs.azure,
      costs.google,
      costs.aws
    );
  
    // Define max heights for different breakpoints
    const MAX_HEIGHTS = {
      mobile: 138,
      tablet: 225,
      desktop: 300,
    };
  
    // Calculate proportional heights
    const calculateHeight = (cost: number) => ({
      mobile: Math.round((cost / maxCost) * MAX_HEIGHTS.mobile),
      tablet: Math.round((cost / maxCost) * MAX_HEIGHTS.tablet),
      desktop: Math.round((cost / maxCost) * MAX_HEIGHTS.desktop),
    });
  
    return [
      {
        company: "Storacha",
        logo: "/forge/cost-comparison/forge.svg",
        cost: Math.round(costs.storacha),
        height: calculateHeight(costs.storacha),
        highlight: true,
      },
      {
        company: "Azure",
        logo: "/forge/cost-comparison/azure.svg",
        cost: Math.round(costs.azure),
        height: calculateHeight(costs.azure),
      },
      {
        company: "Google",
        logo: "/forge/cost-comparison/google.svg",
        cost: Math.round(costs.google),
        height: calculateHeight(costs.google),
      },
      {
        company: "Amazon",
        logo: "/forge/cost-comparison/aws.svg",
        cost: Math.round(costs.aws),
        height: calculateHeight(costs.aws),
      },
    ];
  }