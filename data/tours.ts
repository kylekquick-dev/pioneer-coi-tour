export type TourKey = "coiCorn" | "coiSoybean" | "corn" | "soybean";

export type Product = {
  id: string;
  name: string;
  subtitle?: string;
  year?: string;
  thumbnail: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  highlights?: string[];
};

export type Tour = {
  key: TourKey;
  label: string;
  title: string;
  description: string;
  products: Product[];
};

export const tours: Tour[] = [
  {
    key: "coiCorn",
    label: "COI Corn",
    title: "Century of Innovation: Pioneer Corn",
    description: "Explore historical Pioneer corn products and milestones.",
    products: [
      {
        id: "coi-corn-001",
        name: "Early Pioneer Corn Hybrid",
        subtitle: "Historical corn innovation",
        year: "1920s–1930s",
        thumbnail: "/images/coi-corn/early-corn-thumb.jpg",
        images: [
          "/images/coi-corn/early-corn-1.jpg",
          "/images/coi-corn/early-corn-2.jpg"
        ],
        shortDescription: "A look back at early Pioneer corn hybrid development.",
        fullDescription:
          "This stop highlights the role of early corn hybrid innovation in shaping Pioneer’s first century of seed advancement.",
        highlights: [
          "Early hybrid corn development",
          "Improved standability and yield potential",
          "Foundation for future germplasm improvement"
        ]
      }
    ]
  },
  {
    key: "coiSoybean",
    label: "COI Soybean",
    title: "Century of Innovation: Pioneer Soybean",
    description: "Explore historical Pioneer soybean products and milestones.",
    products: [
      {
        id: "coi-soybean-001",
        name: "Historical Soybean Product",
        subtitle: "Soybean innovation milestone",
        year: "Historical",
        thumbnail: "/images/coi-soybean/soybean-history-thumb.jpg",
        images: ["/images/coi-soybean/soybean-history-1.jpg"],
        shortDescription: "A historical soybean product from Pioneer’s innovation journey.",
        fullDescription:
          "This stop showcases soybean product development and the progression of agronomic performance over time.",
        highlights: [
          "Historical soybean advancement",
          "Improved agronomic traits",
          "Expanded product portfolio"
        ]
      }
    ]
  },
  {
    key: "corn",
    label: "Corn",
    title: "Current Pioneer Corn Products",
    description: "View current Pioneer corn products and agronomic highlights.",
    products: [
      {
        id: "corn-001",
        name: "Current Corn Product",
        subtitle: "Current commercial product",
        thumbnail: "/images/corn/current-corn-thumb.jpg",
        images: ["/images/corn/current-corn-1.jpg"],
        shortDescription: "A current corn product with strong agronomic performance.",
        fullDescription:
          "This stop provides details about a current Pioneer corn product, including positioning, strengths, and field observations.",
        highlights: [
          "Strong yield potential",
          "Good late-season plant health",
          "Adapted to key growing environments"
        ]
      }
    ]
  },
  {
    key: "soybean",
    label: "Soybean",
    title: "Current Pioneer Soybean Products",
    description: "View current Pioneer soybean products and agronomic highlights.",
    products: [
      {
        id: "soybean-001",
        name: "Current Soybean Product",
        subtitle: "Current commercial product",
        thumbnail: "/images/soybean/current-soybean-thumb.jpg",
        images: ["/images/soybean/current-soybean-1.jpg"],
        shortDescription: "A current soybean product with key agronomic strengths.",
        fullDescription:
          "This stop provides details about a current Pioneer soybean product, including maturity, agronomic strengths, and field observations.",
        highlights: [
          "Strong emergence",
          "Good disease package",
          "Reliable performance across environments"
        ]
      }
    ]
  }
];
