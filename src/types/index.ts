export interface StoreHours {
  day: number;
  opens: string;
  closes: string;
}

export interface Store {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  city: string;
  state: string;
  neighborhood: string;
  address: string | null;
  zip: string | null;
  phone: string | null;
  whatsapp: string | null;
  lat: number | null;
  lng: number | null;
  photo: string;
  image?: string;
  photoIsIllustrative: boolean;
  hours: StoreHours[];
  hoursSummary?: string;
  features: string[];
  zipPrefixes: string[];
  provenance: Record<string, string>;
  notes?: string;
  active: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  order: number;
  image?: string;
  tint?: string;
  shape?: string;
  featured?: boolean;
}

export interface CategoryShortcut {
  id: string;
  label: string;
  image: string;
  href: string;
  order: number;
}

export interface Occasion {
  id: string;
  slug: string;
  name: string;
  caption: string;
  tag: string;
  tint: string;
  image: string;
  showText: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  categoryId: string;
  volume: string;
  priceCents: number;
  image: string;
  colorway?: string[];
  description: string;
  tags?: string[];
  sku?: string;
  popularity?: number;
  slug: string;
  imageIsIllustrative?: boolean;
  active: boolean;

  // Convenience optional fields for UI
  regularPriceCents?: number;
  salePriceCents?: number | null;
  category?: string;
  occasions?: string[];
  packageType?: string;
  unitsPerPack?: number;
  temperature?: string;
  alcoholByVolume?: number;
  featured?: boolean;
  order?: number;
}

export interface InventoryItem {
  storeId: string;
  productId: string;
  status: 'disponivel' | 'indisponivel' | 'ultimas-unidades' | 'poucas-unidades' | 'esgotado';
}

export interface Banner {
  id: string;
  format?: string;
  imageDesktop: string;
  imageMobile: string;
  alt?: string;
  showText?: boolean;
  eyebrow?: string | null;
  title: string;
  subtitle: string | null;
  ctaLabel: string | null;
  href: string;
  theme: {
    bg: string;
    accent: string;
    ink: string;
  };
  linkedCategoryId?: string | null;
  linkedProductId?: string | null;
  linkedComboId?: string | null;
  storeIds: string[] | null;
  startsAt?: string | null;
  endsAt?: string | null;
  order: number;
  active: boolean;
}

export interface Promotion {
  id: string;
  productId: string;
  promoPriceCents?: number;
  storeIds: string[] | null;
  startsAt?: string | null;
  endsAt?: string | null;
  label?: string | null;
  active: boolean;

  // Optional convenience fields
  title?: string;
  badge?: string;
  type?: string;
}

export interface ComboItem {
  productId: string;
  quantity: number;
}

export interface Combo {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  subtitle?: string;
  description?: string;
  items: ComboItem[];
  priceCents: number;
  regularPriceCents?: number;
  image: string;
  theme?: {
    bg: string;
    accent: string;
    ink: string;
  };
  storeIds: string[] | null;
  featured: boolean;
  serves: string;
  active: boolean;
}

export interface BenefitItem {
  id: string;
  icon: string;
  title: string;
  text: string;
  href?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  highlight?: boolean;
}

export interface HomeSectionItem {
  id: string;
  visible: boolean;
  order: number;
}

export interface Settings {
  defaultStoreId: string;
  orderGreeting: string;
  orderClosing: string;
  instagram: string;
  showBenefits: boolean;
  benefits: BenefitItem[];
  menu: MenuItem[];
  searchSuggestions: string[];
  storeNotice: {
    enabled: boolean;
    text: string;
  };
  homeSections: HomeSectionItem[];
  tagRail: {
    tag: string;
    eyebrow: string;
    title: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  storeId: string | null;
  active: boolean;
}

export interface Dataset {
  stores: Store[];
  categories: Category[];
  categoryShortcuts: CategoryShortcut[];
  products: Product[];
  inventory: InventoryItem[];
  promotions: Promotion[];
  banners: Banner[];
  combos: Combo[];
  occasions: Occasion[];
  settings: Settings;
  users?: User[];
}

export interface CartItem {
  kind: 'product' | 'combo';
  refId: string;
  quantity: number;
}

