export interface SEOMetadata {
  primaryKeyword: string;
  secondaryKeywords: [string, string];
  metaTitle: string;
  metaDescription: string;
}

export interface QuestionAnswer {
  question: string;
  directAnswer: string;
  supportingDetails: string;
}

export interface IllustrativeSpot {
  name: string;
  neighborhood: string;
  highlight: string;
  typicalSpecialty: string;
  estimatedRange: string;
  vibe: string;
  bestHour: string;
}

export interface Article {
  id: string;
  slug: string;
  route: string;
  title: string;
  headline: string;
  deck: string;
  category: string;
  readTime: string;
  publishDate: string;
  heroImage: string;
  imageAlt: string;
  imageCaption: string;
  keyTakeaways: string[];
  fieldSummary: {
    focusArea: string;
    budgetOrTime: string;
    signatures: string;
    localTip: string;
  };
  qaSections: QuestionAnswer[];
  seoBaseline: SEOMetadata;
  relatedArticleRoutes: string[];
}

export interface DiscoveryCategory {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  associatedRoute: string;
  iconName: string;
  featuredBadge: string;
}
