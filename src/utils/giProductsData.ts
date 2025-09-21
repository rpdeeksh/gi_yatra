// GI Products data for Karnataka organized by districts
export interface GIProduct {
  id: string;
  name: string;
  district: string;
  description: string;
  category: string;
  type: 'textiles' | 'handicrafts' | 'agricultural' | 'food' | 'beverages' | 'metalcraft' | 'other';
  heritage: string;
  story: string;
  exportValue?: string;
  artisans?: string;
  yearRegistered?: number;
  significance?: string;
  techniques?: string[];
  economicImpact?: string;
  seasonality?: string;
  artisanCommunities?: string[];
  exportMarkets?: string[];
  awards?: string[];
  image?: string;
  isGiTagged?: boolean;
}

export const karnatakaGIProducts: GIProduct[] = [
  // Bagalkote
  {
    id: "ilkal-sarees",
    name: "Ilkal Sarees",
    district: "Bagalkote",
    description: "Traditional handloom sarees from Ilkal town with distinctive kasuti embroidery and vibrant colors",
    category: "Handloom Textiles",
    type: "textiles",
    heritage: "UNESCO Heritage",
    story: "Woven with traditional techniques passed down through generations in Ilkal town",
    exportValue: "₹85 Cr",
    artisans: "5,000+",
    yearRegistered: 2006,
    significance: "Famous for their distinctive border and pallu designs with Tope Teni technique",
    techniques: ["Kasuti embroidery", "Tope Teni weaving", "Traditional pit loom"],
    economicImpact: "Supports over 5,000 weaver families in Bagalkote district",
    seasonality: "Year-round production, peak during festival seasons",
    artisanCommunities: ["Padmasali", "Devanga", "Saali"],
    exportMarkets: ["USA", "UK", "Australia", "Middle East"],
    image: "/images/ilkal-sarees.jpg",
    isGiTagged: true
  },
  {
    id: "guledgudd-khana",
    name: "Guledgudd Khana",
    district: "Bagalkote",
    description: "Traditional textile from Guledgudd known for its unique weaving patterns",
    category: "Textiles",
    type: "textiles",
    heritage: "Traditional Craft",
    story: "Ancient textile tradition from Guledgudd region with distinctive patterns",
    exportValue: "₹25 Cr",
    artisans: "1,500+",
    image: "/images/guledgudd-khana.jpg",
    isGiTagged: true
  },

  // Bengaluru Urban/Rural
  {
    id: "bangalore-blue-grapes",
    name: "Bangalore Blue Grapes",
    district: "Bengaluru",
    description: "Premium grape variety grown in Kolar/Chikkaballapur/Bangalore region",
    category: "Agricultural Produce",
    type: "agricultural",
    heritage: "Agricultural Heritage",
    story: "Sweet, seedless grapes cultivated using traditional methods in the Deccan plateau",
    exportValue: "₹120 Cr",
    artisans: "8,000+",
    yearRegistered: 2013,
    significance: "India's first grape variety to receive GI tag",
    techniques: ["Traditional viticulture", "Organic farming", "Drip irrigation"],
    economicImpact: "Major export earner for Karnataka's agricultural sector",
    seasonality: "November to March harvest season",
    artisanCommunities: ["Local farmers", "Agricultural cooperatives"],
    exportMarkets: ["Europe", "Middle East", "Southeast Asia"],
    image: "/images/bangalore-blue-grapes.jpg",
    isGiTagged: true
  },
  {
    id: "bangalore-rose-onion",
    name: "Bangalore Rose Onion",
    district: "Bengaluru",
    description: "Distinctive rose-colored onion variety with mild flavor",
    category: "Agricultural Produce",
    type: "agricultural",
    heritage: "Agricultural Heritage",
    story: "Cultivated for over a century, known for its unique color and mild taste",
    exportValue: "₹45 Cr",
    artisans: "3,000+",
    image: "/images/bangalore-rose-onion.jpg",
    isGiTagged: true
  },

  // Bidar
  {
    id: "bidriware",
    name: "Bidriware",
    district: "Bidar",
    description: "Traditional metal handicraft with intricate inlay work using silver and brass",
    category: "Metal Handicrafts",
    type: "metalcraft",
    heritage: "UNESCO Heritage",
    story: "700-year-old metalcraft tradition brought by Persian artisans, perfected in Bidar",
    exportValue: "₹65 Cr",
    artisans: "2,500+",
    yearRegistered: 2006,
    significance: "Unique blackening technique using zinc and copper alloy",
    techniques: ["Metal inlay work", "Traditional blackening", "Silver damascening"],
    economicImpact: "Primary livelihood for traditional metalworker families",
    seasonality: "Year-round production",
    artisanCommunities: ["Traditional metalworkers", "Kashmiri artisans"],
    exportMarkets: ["Middle East", "Europe", "USA", "Japan"],
    awards: ["National Award for Excellence in Handicrafts"],
    image: "/images/bidriware.jpg",
    isGiTagged: true
  },

  // Ballari
  {
    id: "hadagali-mallige",
    name: "Hadagali Mallige",
    district: "Ballari",
    description: "Fragrant jasmine variety from Hadagali region",
    category: "Flowers",
    type: "agricultural",
    heritage: "Agricultural Heritage",
    story: "Sacred jasmine used in temple worship and traditional ceremonies",
    exportValue: "₹15 Cr",
    artisans: "800+",
    image: "/images/hadagali-mallige.jpg",
    isGiTagged: true
  },

  // Chikkamagaluru
  {
    id: "chikmagalur-arabica-coffee",
    name: "Chikmagalur Arabica Coffee",
    district: "Chikkamagaluru",
    description: "Premium arabica coffee grown in the hills of Chikmagalur",
    category: "Beverages",
    type: "beverages",
    heritage: "Agricultural Heritage",
    story: "Birthplace of coffee in India, introduced by Baba Budan in the 17th century",
    exportValue: "₹250 Cr",
    artisans: "15,000+",
    yearRegistered: 2007,
    significance: "First coffee plantation in India, premium quality arabica",
    techniques: ["Shade-grown cultivation", "Traditional processing", "Sun-drying"],
    economicImpact: "Major contributor to Karnataka's coffee export revenue",
    seasonality: "October to February harvest",
    artisanCommunities: ["Coffee planters", "Tribal communities", "Local farmers"],
    exportMarkets: ["Europe", "USA", "Japan", "Middle East"],
    image: "/images/chikmagalur-arabica.jpg",
    isGiTagged: true
  },
  {
    id: "baba-budangiris-arabica",
    name: "Baba Budangiris Arabica",
    district: "Chikkamagaluru",
    description: "Premium coffee from the sacred Baba Budangiri hills",
    category: "Beverages",
    type: "beverages",
    heritage: "Sacred Heritage",
    story: "Coffee grown in the mystical hills where Baba Budan first planted coffee seeds",
    exportValue: "₹180 Cr",
    artisans: "10,000+",
    image: "/images/baba-budangiris.jpg",
    isGiTagged: true
  },

  // Chitradurga
  {
    id: "molakalmuru-sarees",
    name: "Molakalmuru Sarees",
    district: "Chitradurga",
    description: "Traditional sarees from Molakalmuru known for their geometric patterns",
    category: "Handloom Textiles",
    type: "textiles",
    heritage: "Traditional Craft",
    story: "Ancient weaving tradition with distinctive geometric patterns and earthy colors",
    exportValue: "₹35 Cr",
    artisans: "2,000+",
    image: "/images/molakalmuru-sarees.jpg",
    isGiTagged: true
  },

  // Dharwad
  {
    id: "dharwad-pedha",
    name: "Dharwad Pedha",
    district: "Dharwad",
    description: "Traditional sweet made from milk, famous for its unique taste and texture",
    category: "Food Products",
    type: "food",
    heritage: "Culinary Heritage",
    story: "Century-old recipe passed down through generations of sweet makers",
    exportValue: "₹50 Cr",
    artisans: "500+",
    yearRegistered: 2007,
    significance: "Unique preparation method gives distinctive taste and texture",
    techniques: ["Traditional milk processing", "Wood-fired cooking", "Hand-shaping"],
    economicImpact: "Traditional livelihood for sweet-making families",
    seasonality: "Year-round production, peak during festivals",
    artisanCommunities: ["Traditional sweet makers", "Dairy farmers"],
    exportMarkets: ["USA", "Middle East", "UK"],
    image: "/images/dharwad-pedha.jpg",
    isGiTagged: true
  },
  {
    id: "navalgund-durries",
    name: "Navalgund Durries",
    district: "Dharwad",
    description: "Traditional floor coverings from Navalgund with intricate patterns",
    category: "Textiles",
    type: "textiles",
    heritage: "Traditional Craft",
    story: "Hand-woven floor coverings with traditional motifs and natural dyes",
    exportValue: "₹20 Cr",
    artisans: "1,200+",
    image: "/images/navalgund-durries.jpg",
    isGiTagged: true
  },

  // Gulbarga
  {
    id: "gulbarga-tur-dal",
    name: "Gulbarga Tur Dal",
    district: "Gulbarga",
    description: "Premium quality pigeon pea from Gulbarga region",
    category: "Food Products",
    type: "food",
    heritage: "Agricultural Heritage",
    story: "High-protein dal variety cultivated using traditional farming methods",
    exportValue: "₹95 Cr",
    artisans: "12,000+",
    image: "/images/gulbarga-tur-dal.jpg",
    isGiTagged: true
  },

  // Haveri
  {
    id: "byadagi-chilli",
    name: "Byadagi Chilli",
    district: "Haveri",
    description: "Deep red chilli variety known for its color and mild pungency",
    category: "Spices",
    type: "agricultural",
    heritage: "Agricultural Heritage",
    story: "Premium chilli variety prized for its deep red color and export quality",
    exportValue: "₹150 Cr",
    artisans: "20,000+",
    yearRegistered: 2011,
    significance: "India's premium chilli variety for color extraction",
    techniques: ["Traditional cultivation", "Sun-drying", "Organic farming"],
    economicImpact: "Major export crop supporting thousands of farmers",
    seasonality: "October to March harvest",
    artisanCommunities: ["Chilli farmers", "Agricultural cooperatives"],
    exportMarkets: ["USA", "Europe", "Middle East", "Southeast Asia"],
    image: "/images/byadagi-chilli.jpg",
    isGiTagged: true
  },

  // Kodagu
  {
    id: "coorg-orange",
    name: "Coorg Orange",
    district: "Kodagu",
    description: "Sweet and juicy oranges from the hills of Coorg",
    category: "Fruits",
    type: "agricultural",
    heritage: "Agricultural Heritage",
    story: "High-altitude citrus cultivation in the misty hills of Coorg",
    exportValue: "₹80 Cr",
    artisans: "6,000+",
    image: "/images/coorg-orange.jpg",
    isGiTagged: true
  },
  {
    id: "coorg-green-cardamom",
    name: "Coorg Green Cardamom",
    district: "Kodagu",
    description: "Premium cardamom grown in the spice gardens of Coorg",
    category: "Spices",
    type: "agricultural",
    heritage: "Spice Heritage",
    story: "Queen of spices cultivated in the shade of coffee plantations",
    exportValue: "₹200 Cr",
    artisans: "8,000+",
    yearRegistered: 2008,
    significance: "Premium quality cardamom with intense aroma",
    techniques: ["Shade cultivation", "Traditional processing", "Hand-picking"],
    economicImpact: "High-value spice crop supporting hill farmers",
    seasonality: "October to December harvest",
    artisanCommunities: ["Kodava farmers", "Tribal communities"],
    exportMarkets: ["Middle East", "Europe", "USA"],
    image: "/images/coorg-cardamom.jpg",
    isGiTagged: true
  },
  {
    id: "coorg-arabica-coffee",
    name: "Coorg Arabica Coffee",
    district: "Kodagu",
    description: "Premium arabica coffee from the coffee capital of India",
    category: "Beverages",
    type: "beverages",
    heritage: "Coffee Heritage",
    story: "Legendary coffee grown in the mist-covered hills of Coorg",
    exportValue: "₹300 Cr",
    artisans: "18,000+",
    image: "/images/coorg-coffee.jpg",
    isGiTagged: true
  },

  // Koppal
  {
    id: "kinhal-toys",
    name: "Kinhal Toys",
    district: "Koppal",
    description: "Traditional wooden toys with lacquer work from Kinhal",
    category: "Handicrafts",
    type: "handicrafts",
    heritage: "Traditional Craft",
    story: "Colorful wooden toys made using traditional lacquer techniques",
    exportValue: "₹18 Cr",
    artisans: "800+",
    yearRegistered: 2017,
    significance: "Traditional toy-making using natural lacquer and wood",
    techniques: ["Wood carving", "Lacquer work", "Natural coloring"],
    economicImpact: "Traditional livelihood for toy-making families",
    seasonality: "Year-round production",
    artisanCommunities: ["Traditional toy makers", "Wood carvers"],
    exportMarkets: ["Europe", "USA", "Australia"],
    image: "/images/kinhal-toys.jpg",
    isGiTagged: true
  },

  // Mysore
  {
    id: "mysore-silk",
    name: "Mysore Silk",
    district: "Mysore",
    description: "Premium silk sarees known for their lustrous finish and rich colors",
    category: "Textiles",
    type: "textiles",
    heritage: "Royal Heritage",
    story: "Royal silk tradition dating back to the Mysore palace, woven with pure mulberry silk",
    exportValue: "₹450 Cr",
    artisans: "25,000+",
    yearRegistered: 2005,
    significance: "India's premium silk variety with natural gold zari",
    techniques: ["Traditional reeling", "Pure mulberry silk", "Zari work"],
    economicImpact: "Major employer in Karnataka's silk industry",
    seasonality: "Year-round production",
    artisanCommunities: ["Silk weavers", "Reelers", "Dyers"],
    exportMarkets: ["USA", "Europe", "Middle East", "Australia"],
    awards: ["Geographical Indication tag", "Export Excellence Award"],
    image: "/images/mysore-silk.jpg",
    isGiTagged: true
  },
  {
    id: "mysore-mallige",
    name: "Mysore Mallige",
    district: "Mysore",
    description: "Fragrant jasmine flowers used in religious ceremonies",
    category: "Flowers",
    type: "agricultural",
    heritage: "Cultural Heritage",
    story: "Sacred jasmine variety with intense fragrance used in temple worship",
    exportValue: "₹25 Cr",
    artisans: "3,000+",
    image: "/images/mysore-mallige.jpg",
    isGiTagged: true
  },
  {
    id: "nanjangud-banana",
    name: "Nanjangud Banana",
    district: "Mysore",
    description: "Sweet banana variety from Nanjangud known for its unique taste",
    category: "Fruits",
    type: "agricultural",
    heritage: "Agricultural Heritage",
    story: "Sacred banana offered to Lord Srikanteshwara, known for its sweetness",
    exportValue: "₹40 Cr",
    artisans: "5,000+",
    yearRegistered: 2006,
    significance: "Unique variety with religious significance",
    image: "/images/nanjangud-banana.jpg",
    isGiTagged: true
  },
  {
    id: "mysore-rosewood-inlay",
    name: "Mysore Rosewood Inlay",
    district: "Mysore",
    description: "Intricate inlay work on rosewood furniture",
    category: "Handicrafts",
    type: "handicrafts",
    heritage: "Royal Craft",
    story: "Royal furniture craft with ivory inlay work patronized by Mysore rulers",
    exportValue: "₹35 Cr",
    artisans: "1,500+",
    image: "/images/mysore-rosewood.jpg",
    isGiTagged: true
  },
  {
    id: "ganjifa-cards",
    name: "Ganjifa Cards of Mysore",
    district: "Mysore",
    description: "Traditional playing cards with hand-painted artwork",
    category: "Handicrafts",
    type: "handicrafts",
    heritage: "Royal Heritage",
    story: "Royal card game with intricate hand-painted designs on cloth",
    exportValue: "₹8 Cr",
    artisans: "200+",
    image: "/images/ganjifa-cards.jpg",
    isGiTagged: true
  },

  // Ramanagara
  {
    id: "channapatna-toys",
    name: "Channapatna Toys & Dolls",
    district: "Ramanagara",
    description: "Colorful wooden toys made using traditional lacquer techniques",
    category: "Handicrafts",
    type: "handicrafts",
    heritage: "Traditional Craft",
    story: "Eco-friendly wooden toys colored with natural lacquer, safe for children",
    exportValue: "₹120 Cr",
    artisans: "8,000+",
    yearRegistered: 2006,
    significance: "Eco-friendly toys using natural materials and traditional techniques",
    techniques: ["Wood turning", "Natural lacquer", "Vegetable dyes"],
    economicImpact: "Primary livelihood for toy-making families in Channapatna",
    seasonality: "Year-round production, peak during festive seasons",
    artisanCommunities: ["Traditional toy makers", "Wood turners"],
    exportMarkets: ["Europe", "USA", "Japan", "Australia"],
    awards: ["Handicrafts Export Award", "Environmental Excellence"],
    image: "/images/channapatna-toys.jpg",
    isGiTagged: true
  },

  // Udupi
  {
    id: "udupi-mallige",
    name: "Udupi Mallige",
    district: "Udupi",
    description: "Sacred jasmine variety from Udupi temples",
    category: "Flowers",
    type: "agricultural",
    heritage: "Temple Heritage",
    story: "Sacred jasmine used in Krishna temple worship with divine fragrance",
    exportValue: "₹20 Cr",
    artisans: "2,500+",
    image: "/images/udupi-mallige.jpg",
    isGiTagged: true
  },
  {
    id: "udupi-mattu-gulla",
    name: "Udupi Mattu Gulla",
    district: "Udupi",
    description: "Unique striped brinjal variety from Mattu village",
    category: "Vegetables",
    type: "agricultural",
    heritage: "Agricultural Heritage",
    story: "Distinctive brinjal variety with natural stripes, grown only in Mattu village",
    exportValue: "₹12 Cr",
    artisans: "800+",
    yearRegistered: 2009,
    significance: "Unique genetic variety found only in specific region",
    image: "/images/mattu-gulla.jpg",
    isGiTagged: true
  },

  // Uttara Kannada
  {
    id: "sirsi-supari",
    name: "Sirsi Supari",
    district: "Uttara Kannada",
    description: "Premium areca nut variety from Sirsi region",
    category: "Agricultural Produce",
    type: "agricultural",
    heritage: "Agricultural Heritage",
    story: "High-quality areca nut cultivated in the Western Ghats region",
    exportValue: "₹180 Cr",
    artisans: "15,000+",
    image: "/images/sirsi-supari.jpg",
    isGiTagged: true
  }
];

// Helper functions for filtering and searching
export const getProductsByDistrict = (district: string): GIProduct[] => {
  return karnatakaGIProducts.filter(product => 
    product.district.toLowerCase().includes(district.toLowerCase())
  );
};

export const getProductsByType = (type: string): GIProduct[] => {
  return karnatakaGIProducts.filter(product => product.type === type);
};

export const getProductsByCategory = (category: string): GIProduct[] => {
  return karnatakaGIProducts.filter(product => 
    product.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const searchProducts = (query: string): GIProduct[] => {
  const searchTerm = query.toLowerCase();
  return karnatakaGIProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.district.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
};

export const getDistinctDistricts = (): string[] => {
  return Array.from(new Set(karnatakaGIProducts.map(product => product.district))).sort();
};

export const getDistinctCategories = (): string[] => {
  return Array.from(new Set(karnatakaGIProducts.map(product => product.category))).sort();
};

export const getDistinctTypes = (): string[] => {
  return Array.from(new Set(karnatakaGIProducts.map(product => product.type))).sort();
};

export default karnatakaGIProducts;
